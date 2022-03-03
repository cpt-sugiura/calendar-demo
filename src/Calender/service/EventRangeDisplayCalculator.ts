import {spaceshipEval} from '../calender-helper';

type PrimitiveRange = {
  start: Date;
  end: Date;
};
type DateRangeRet = {
  start: Date;
  end: Date;
  topPer: number;
  leftPer: number;
  heightPer: number;
  widthPer: number;
};

export class EventRangeDisplayCalculator {
  private dateRangeList: PrimitiveRange[];

  constructor(dateRangeList: PrimitiveRange[]) {
    this.dateRangeList = dateRangeList;
  }
  public getDateRangeWithDisplay(): DateRangeRet[] {
    // 開始日時昇順
    const startAsc: Array<Partial<DateRangeRet> & PrimitiveRange & Omit<DateRangeRet, 'widthPer' | 'leftPer'>> =
      this.dateRangeList
        .sort((a, b) => spaceshipEval(a.start.getTime(), b.start.getTime()))
        .map((range, i) => {
          // 高さは確定済みなのでここで記述
          const startSec = range.start.getHours() * 60 * 60 + range.start.getMinutes() * 60 + range.start.getSeconds();
          const endSec = range.end.getHours() * 60 * 60 + range.end.getMinutes() * 60 + range.end.getSeconds();
          return {
            ...range,
            topPer: startSec / (24 * 60 * 60),
            heightPer: (endSec - startSec) / (24 * 60 * 60),
          };
        });

    // 幅と開始地点を決定
    const slotsCount = this.dateRangeList.length;
    // 描画箇所を割り当て済みかつループ内で参照している範囲と被りうる範囲を貯める
    const stackRange: PrimitiveRange[] = [];
    let slots: Array<PrimitiveRange | null> = Array(this.dateRangeList.length).fill(null);
    return startAsc.map((range): DateRangeRet => {
      // 現在参照している範囲と被らないスロット割り当て済み範囲をnull埋め。スロットを空ける
      slots = slots.map((rangeInSlots) => (rangeInSlots && rangeInSlots.end > range.start ? rangeInSlots : null));
      // 割り当てスロットの決定
      const spaces = continuousFreeSpaceSlots(slots.map(r => r ? true : null))
        // 幅降順
        .sort((a, b) => spaceshipEval(b.width, a.width));
      const allocateSpace = spaces[0];
      console.log({
        range,allocateSpace
      })
      slots[allocateSpace.start] = range;
      // スタックしている範囲の分、幅と開始地点をずらす
      range.leftPer = allocateSpace.start * 100 / slotsCount;
      range.widthPer = allocateSpace.width * 100 / slotsCount;
      // 描画範囲を追加した要素を返す
      return {
        start: range.start,
        end: range.end,
        heightPer: range.heightPer,
        leftPer: range.leftPer ?? 0,
        topPer: range.topPer,
        widthPer: range.widthPer ?? 100,
      };
    });
  }
}

type Space = {
  start: number;
  end: number;
  width: number;
}

// 連続した空スロットをまとめる。slots の null が空スロット、 true が割り当て済みスロット
const continuousFreeSpaceSlots = (slots: Array<null|true>): Array<Space> => {
  const ret: Space[] = [];
  let freeSlot: Partial<Space> = {}
  for (let index = 0; index < slots.length; index++) {
    const value = slots[index];
    if (!value) {
      if (freeSlot.start === undefined) {
        freeSlot.start = index;
      } else {
        // no action
      }
    } else {
      if (freeSlot.start === undefined) {
        // no action
      } else {
        freeSlot.end = index - 1;
        freeSlot.width = (index - 1) - freeSlot.start;
        ret.push(freeSlot as Space);
        freeSlot = {}
      }
    }
  }
  if(freeSlot.start !== undefined){
    freeSlot.end = slots.length - 1;
    freeSlot.width = slots.length - freeSlot.start;
    ret.push(freeSlot as Space);
  }
  return ret;
}

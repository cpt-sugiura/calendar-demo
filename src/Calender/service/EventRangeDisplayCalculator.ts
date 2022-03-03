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

export class EventRangeDisplayCalculator<T = {}> {
  private dateRangeList: Array<PrimitiveRange & T>;

  constructor(dateRangeList: Array<PrimitiveRange & T>) {
    this.dateRangeList = dateRangeList;
  }

  public getDateRangeWithDisplay(): DateRangeRet[] {
    // 開始日時昇順
    const startAsc: Array<Partial<DateRangeRet> & PrimitiveRange & Omit<DateRangeRet, 'widthPer' | 'leftPer'>> =
      this.dateRangeList
        .sort((a, b) => spaceshipEval(a.start.getTime(), b.start.getTime()))
        .map((range) => {
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
    let slots: Array<PrimitiveRange | null> = Array(this.dateRangeList.length).fill(null);
    const allocatedRanges = startAsc.map((range): DateRangeRet => {
      // 現在参照している範囲と被らないスロット割り当て済み範囲をnull埋め。スロットを空ける
      slots = slots.map((rangeInSlots) => (rangeInSlots && rangeInSlots.end > range.start ? rangeInSlots : null));
      // 割り当てスロットの決定
      const spaces = continuousFreeSpaceSlots(slots.map(r => r ? true : null))
        // 幅降順
        .sort((a, b) => spaceshipEval(b.width, a.width));
      // 空きスロットの内、最も幅が大きい部分を割り当てる。幅が同じならば左側を優先して割り当てる
      const allocateSpace = spaces[0];
      slots[allocateSpace.start] = range;
      // 描画範囲を追加した要素を返す
      return {
        start: range.start,
        end: range.end,
        heightPer: range.heightPer,
        leftPer: allocateSpace.start * 100 / slotsCount,
        topPer: range.topPer,
        widthPer: allocateSpace.width * 100 / slotsCount,
      };
    });
    // 干渉を整理
    const groupLen = 50;
    const groups: DateRangeRet[][] = Array(groupLen).fill(null).map(() => []);
    allocatedRanges.forEach(r => {
      groups[Math.round(r.topPer * 100 / (99 / groupLen))].push(r);
    })
    groups.forEach(g => {
      if (g.length <= 1) {
        return;
      }
      // 干渉が起きていないか確認
      // 干渉が起きていたら右隣りのアイテムの左端の位置まで現在アイテムの右端を寄せる
      // 最も右のアイテムに操作はしないので <= length - 2
      for (let i = 0; i <= g.length - 2; i++) {
        const current = g[i];
        const next = g[i + 1]
        if (current.leftPer + current.widthPer > next.leftPer) {
          current.widthPer = next.leftPer - current.leftPer;
        }
      }
    })

    return allocatedRanges;
  }
}

type Space = {
  start: number;
  end: number;
  width: number;
}

// 連続した空スロットをまとめる。slots の null が空スロット、 true が割り当て済みスロット
const continuousFreeSpaceSlots = (slots: Array<null | true>): Array<Space> => {
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
        freeSlot.width = freeSlot.end - freeSlot.start + 1;
        ret.push(freeSlot as Space);
        freeSlot = {}
      }
    }
  }
  if (freeSlot.start !== undefined) {
    freeSlot.end = slots.length - 1;
    freeSlot.width = freeSlot.end - freeSlot.start + 1;
    ret.push(freeSlot as Space);
  }
  return ret;
}

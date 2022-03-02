import {spaceshipEval} from "../calender-helper";

type PrimitiveRange = {
  start: Date;
  end: Date;
}
type DateRangeRet = {
  start: Date;
  end: Date;
  topPer: number;
  leftPer: number;
  heightPer: number;
  widthPer: number;
}


export class EventRangeDisplayCalculator {
  private dateRangeList: PrimitiveRange[]

  constructor(dateRangeList: PrimitiveRange[]) {
    this.dateRangeList = dateRangeList;
  }

  // todo 近い場所の場合、文字が被るので特別に見た目を離す処理が欲しい
  // todo 右端に長いのがあってスタックが減ると終点が見えずに詰む
  // スタックよりもスロットの方が良いのでは？
  public getDateRangeWithDisplay(): DateRangeRet[] {

    // 開始日時昇順
    const startAsc: Array<Partial<DateRangeRet> & PrimitiveRange & Omit<DateRangeRet, 'widthPer' | 'leftPer'>> = this.dateRangeList
      .sort((a, b) => spaceshipEval(a.start.getTime(), b.start.getTime()))
      .map((range, i) => {
        // 高さは確定済みなのでここで記述
        const startSec = range.start.getHours() * 60 * 60 + range.start.getMinutes() * 60 + range.start.getSeconds();
        const endSec = range.end.getHours() * 60 * 60 + range.end.getMinutes() * 60 + range.end.getSeconds();
        return {
          ...range,
          topPer: startSec / (24 * 60 * 60),
          heightPer: (endSec - startSec) / (24 * 60 * 60),
        }
      });

    // 幅と開始地点を決定
    const slotsCount = this.dateRangeList.length;
    // 描画箇所を割り当て済みかつループ内で参照している範囲と被りうる範囲を貯める
    let stackRange: PrimitiveRange[] = []
    return startAsc.map((range): DateRangeRet => {
      // 現在参照している範囲と被らないスタックしている範囲を除去
      stackRange = stackRange.filter(rangeInStack => rangeInStack.end > range.start)
      // スタックしている範囲の分、幅と開始地点をずらす
      range.widthPer = 100 / slotsCount * (slotsCount - stackRange.length);
      range.leftPer = 100 - range.widthPer;
      // スタックに現在参照している範囲を追加
      stackRange.push({...range});
      // 描画範囲を追加した要素を返す
      return {
        start: range.start,
        end: range.end,
        heightPer: range.heightPer,
        leftPer: range.leftPer ?? 0,
        topPer: range.topPer,
        widthPer: range.widthPer ?? 100,
      }
    });
  }
}

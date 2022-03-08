import {CSSProperties} from "react";

export const isToday = (d: Date) => {
  const today = new Date();
  return (
    d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate()
  );
};
export const includeCurrentTime = (startHour: number, endHour: number) => {
  const today = new Date();
  const start = new Date(`${new Date().toDateString()} ${startHour}:00:00`);
  const end = new Date(`${new Date().toDateString()} ${endHour}:00:00`);
  return start <= today && today <= end;
};

export const makeClassName = (classNameList: string[]): string => {
  return classNameList.join(' ').trim();
};

/** PHP の宇宙船演算子。ソートメソッドで使うと便利 */
export const spaceshipEval = (a: number | string, b: number | string): -1 | 0 | 1 => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const arrUniq = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};
/*** 渡されたrgbに対して目立つ色を返す */
export const blackOrWhite = (rgb: string | number[] | CSSProperties['color']): 'white' | 'black' | undefined => {
  let rgbArr: number[] | undefined = undefined;
  if (Array.isArray(rgb)) {
    rgbArr = rgb
  } else if(typeof rgb === 'string') {
    let match: RegExpMatchArray | null;
    if ((match = rgb.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/))) {
      rgbArr = [match[1], match[2], match[3]].map(n => Number.parseInt(n, 16));
    } else if ((match = rgb.match(/rgba?\((\d+\s*),\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*\d+\s*)?\)/))) {
      rgbArr = [+match[1], +match[2], +match[3]];
    }
  }

  if (rgbArr === undefined || rgbArr.length < 3) {
    console.error(`rgb形式でない値が渡されました in blackOrWhite, ${rgb}, ${JSON.stringify(rgb, null, 2)}`);
    return undefined;
  }
  return (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000 < 128 ? 'white' : 'black';
}

export const getParams = () => {
  const ret: { [p: string]: string } = {};
  new URLSearchParams(window.location.search).forEach((v, k) => {
    ret[k] = v;
  });
  return ret;
};


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

const getParams = () => {
  const ret: { [p: string]: string } = {};
  new URLSearchParams(window.location.href).forEach((v, k) => {
    ret[k] = v;
  });
  return ret;
};

export const isBackgroundAlpha = () => {
  return getParams().isBackgroundAlpha === '1';
};

export const withoutBorderOverlap = () => {
  return getParams().withoutBorderOverlap === '1';
};

export const withoutEventMonospace = () => {
  return getParams().withoutEventMonospace === '1';
};

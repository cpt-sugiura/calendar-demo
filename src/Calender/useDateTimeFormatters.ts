import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

type CanFormatType = Date | string;

export const useDateTimeFormatters = (): {
  dateFormatter: (d: CanFormatType) => string;
  df: (d: CanFormatType) => string;
  dateMinuteFormatter: (d: CanFormatType) => string;
  dmf: (d: CanFormatType) => string;
  dateMinuteNaturalLanguageFormatter: (d: CanFormatType) => string;
  dmnlf: (d: CanFormatType) => string;
  minuteFormatter: (d: CanFormatType) => string;
  mf: (d: CanFormatType) => string;
  dateTimeFormatter: (d: CanFormatType) => string;
  dtf: (d: CanFormatType) => string;
  yearFormatter: (d: CanFormatType) => string;
  onlyDateFormatter: (d: CanFormatType) => string;
  dateSlashTypeFormatter: (d: CanFormatType) => string;
} => {
  const baseFormatter = (d: CanFormatType, formatStr: string): string => {
    if (!d) {
      return '';
    }
    if (typeof d === 'string') {
      const mysqlFormat = /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?: ([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
      if (d.match(mysqlFormat)) {
        d = d.replace(mysqlFormat, (match, year, month, day, hour, minutes, seconds) => {
          if (!hour) {
            return `${year}-${month}-${day}T00:00:00.000+09:00`;
          } else {
            return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.000+09:00`;
          }
        });
      }
      d = new Date(d);
    }
    return format(d, formatStr, { locale: ja });
  };
  const yearFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy年');
  const onlyDateFormatter = (d: CanFormatType): string => baseFormatter(d, 'M月d日(E)');
  const dateFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy年M月d日(E)');
  const dateMinuteFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy年M月d日(E) HH:mm');
  const dateMinuteNaturalLanguageFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy年M月d日(E) HH時mm分');
  const minuteFormatter = (d: CanFormatType): string => baseFormatter(d, 'HH:mm');
  const dateTimeFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy年M月d日(E) HH:mm:ss');
  const dateSlashTypeFormatter = (d: CanFormatType): string => baseFormatter(d, 'yyyy/M/d');

  return {
    dateFormatter,
    df: dateFormatter,
    dateMinuteFormatter,
    dmf: dateMinuteFormatter,
    dateMinuteNaturalLanguageFormatter,
    dmnlf: dateMinuteNaturalLanguageFormatter,
    minuteFormatter,
    mf: minuteFormatter,
    dateTimeFormatter,
    dtf: dateTimeFormatter,
    yearFormatter,
    onlyDateFormatter,
    dateSlashTypeFormatter,
  };
};

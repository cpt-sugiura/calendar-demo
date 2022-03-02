import { CalenderDate } from './@types/Date';
import { startOfWeek, add } from 'date-fns';

type UseWeekRet = {
  currentWeek: CalenderDate[];
  nextWeek: CalenderDate[];
};
export const useWeek = () => {
  function makeWeek(dateOfWeek: Date) {
    const s = startOfWeek(dateOfWeek);
    const week: UseWeekRet['currentWeek'] = [];
    for (let i = 0; i <= 6; i++) {
      const d = add(s, { days: i });
      week.push({
        date: d,
        isHoliday: false,
      });
    }
    return week;
  }

  const currentWeek = makeWeek(new Date());
  const nextWeek = makeWeek(add(new Date(), { days: 7 }));
  return {
    currentWeek,
    nextWeek,
  };
};

import React, { useEffect, useRef, useState } from 'react';
import { CalenderHeader, DisplayType } from './CalenderHeader';
import { useWeek } from './useWeek';
import { useDate } from './useDate';
import { CalenderDateBody } from './CalenderDateBody';
import { CalenderDateHeader } from './CalenderDateHeader';
import './Calender.scss';

export const Calender: React.FC = () => {
  const [displayType, setDisplayType] = useState<DisplayType>('CURRENT_WEEK');
  const ComponentMap: Record<DisplayType, JSX.Element> = {
    CURRENT_WEEK: <CurrentWeekCalender />,
    NEXT_WEEK: <NextWeekCalender />,
    TODAY: <TodayCalender />,
  };
  return (
    <div className={'calender'}>
      <CalenderHeader onChangeDisplayType={(e) => setDisplayType(e)} />
      {ComponentMap[displayType]}
    </div>
  );
};

const TodayCalender: React.FC = () => {
  return <span>未実装です</span>;
};
const CurrentWeekCalender: React.FC = () => {
  const { currentWeek } = useWeek();
  const { hours24 } = useDate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }
    const currentSec = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds();
    const to = ((currentSec - 4800) / (24 * 60 * 60)) * wrapperRef.current.scrollHeight;
    wrapperRef.current.scrollTo({
      top: to,
      left: 0,
    });
  }, [wrapperRef.current]);

  return (
    <div className={'calender-body-wrapper'} ref={wrapperRef}>
      <table className={'calender-body'}>
        <CalenderDateHeader calenderDates={currentWeek} />
        <CalenderDateBody dateStructs={hours24} calenderDates={currentWeek} />
      </table>
    </div>
  );
};
const NextWeekCalender: React.FC = () => {
  const { nextWeek } = useWeek();
  const { hours24 } = useDate();
  return (
    <div className={'calender-body-wrapper'}>
      <table className={'calender-body'}>
        <CalenderDateHeader calenderDates={nextWeek} />
        <CalenderDateBody dateStructs={hours24} calenderDates={nextWeek} />
      </table>
    </div>
  );
};

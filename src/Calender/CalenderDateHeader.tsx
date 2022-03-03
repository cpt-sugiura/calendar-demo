import { CalenderDate } from './@types/Date';
import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { isToday, makeClassName } from './calender-helper';

type CalenderDateHeaderProps = { calenderDates: CalenderDate[] };
export const CalenderDateHeader: React.FC<CalenderDateHeaderProps> = (props) => {
  return (
    <thead className={'date-header'}>
      <tr>
        <th />
        {/* for hourLabel blank*/}
        {props.calenderDates.map((d) => (
          <th
            key={d.date.toISOString()}
            className={makeClassName(['date-header-day-cell', isToday(d.date) ? 'today' : ''])}
          >
            <span>{format(d.date, 'eee', { locale: ja })}</span>
          </th>
        ))}
      </tr>
      <tr>
        <th />
        {/* for hourLabel blank*/}
        {props.calenderDates.map((d) => (
          <th
            key={d.date.toISOString()}
            className={makeClassName(['date-header-date-cell', isToday(d.date) ? 'today' : ''])}
          >
            <span className={'invisible-for-width'}>00</span>
            <div className={'date-text'}>
              <div>{format(d.date, 'd', { locale: ja })}</div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

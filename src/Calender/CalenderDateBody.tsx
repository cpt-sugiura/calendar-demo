import { CalenderDate, SATURDAY, SUNDAY } from './@types/Date';
import React, { useEffect, useRef, useState } from 'react';
import { DateStruct } from './useDate';
import { CalenderEvent, CalenderEventCanBeOnModal } from './CalenderEvent';
import { EventRangeDisplayCalculator } from './service/EventRangeDisplayCalculator';
import { CalenderTimeMarker } from './CalenderTimeMarker';
import {blackOrWhite, includeCurrentTime, isToday} from './calender-helper';
import { events } from './TestData';

type CalenderDateBodyProps = {
  dateStructs: DateStruct[];
  calenderDates: CalenderDate[];
};
export const CalenderDateBody: React.FC<CalenderDateBodyProps> = (props) => {
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const [tbodyHeight, setTbodyHeight] = useState(0);

  useEffect(() => {
    if (!tbodyRef.current) {
      return;
    }
    const observer = new ResizeObserver(() => tbodyRef.current && setTbodyHeight(tbodyRef.current.scrollHeight));
    observer.observe(tbodyRef.current);
    return () => {
      tbodyRef.current && observer.unobserve(tbodyRef.current);
    };
  }, [tbodyRef.current]);

  return (
    <tbody className={'date-body'} ref={tbodyRef}>
      <tr>
        <td style={{ height: 0, border: 'none' }} />
        {props.calenderDates.map((d) => (
          <td className={'event-cell'} key={d.date.toISOString()} style={{ position: 'relative' }}>
            {new EventRangeDisplayCalculator<CalenderEventCanBeOnModal>(
              (events[d.date.getDate()] ?? []).map((d) => {
                return {
                  ...d,
                  start: d.startDate,
                  end: d.endDate,
                };
              })
            )
              .getDateRangeWithDisplay()
              .map((event) => {
                return (
                  <CalenderEvent
                    key={`${d.date.getDate()}-${event.title}`}
                    event={event}
                    style={{
                      top: event.topPer * tbodyHeight,
                      height: event.heightPer * tbodyHeight,
                      color: event.color || blackOrWhite(event.backgroundColor),
                      backgroundColor: event.backgroundColor,
                      borderColor: event.color || blackOrWhite(event.backgroundColor) === 'black' ? '#888888' : '#fff',
                      left: `${event.leftPer}%`,
                      width: `${event.widthPer}%`,
                    }}
                  />
                );
              })}
          </td>
        ))}
      </tr>
      {props.dateStructs.map((dateStruct) => (
        <tr key={dateStruct.hour}>
          <td className={'hour-label-cell'}>
            <span className={'hour-label-text'}>{dateStruct.label}</span>
            <span className={'hour-label-text-dummy-for-space'}>{dateStruct.label}</span>
          </td>
          {props.calenderDates.map((d) => (
            <td
              key={d.date.toISOString()}
              className={[
                'calender-date-cell',
                d.date.toISOString(),
                d.isHoliday ? 'holiday' : '',
                d.date.getDay() === SATURDAY ? 'saturday' : '',
                d.date.getDay() === SUNDAY ? 'sunday' : '',
              ]
                .join(' ')
                .trim()}
            >
              {isToday(d.date) && includeCurrentTime(dateStruct.hour, dateStruct.hour + 1) && (
                <CalenderTimeMarker
                  style={{
                    top: `${(new Date().getMinutes() / 60) * 100}%`,
                  }}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

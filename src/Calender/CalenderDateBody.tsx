import { CalenderDate, DayMap } from './@types/Date';
import React, { useEffect, useRef, useState } from 'react';
import { DateStruct } from './useDate';
import { CalenderEvent, CalenderEventInput } from './CalenderEvent';
import { EventRangeDisplayCalculator } from './service/EventRangeDisplayCalculator';
import { CalenderTimeMarker } from './CalenderTimeMarker';
import { includeCurrentTime, isToday } from './calender-helper';

const dateInitForDemo = new Date().getDate();
const pallet = ['#b8f9baaa', '#ccddffaa', '#dfdfdfaa'];
const events: { [p: number]: CalenderEventInput[] } = {
  [dateInitForDemo]: [
    {
      title: '〇〇建設様配達先',
      startDate: new Date('2022-02-28 09:00:00'),
      endDate: new Date('2022-02-28 11:00:00'),
      backgroundColor: pallet[0],
    },
    {
      title: '〇〇建設様配達先2',
      startDate: new Date('2022-02-28 10:00:00'),
      endDate: new Date('2022-02-28 12:45:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先3',
      startDate: new Date('2022-02-28 13:00:00'),
      endDate: new Date('2022-02-28 15:00:00'),
      backgroundColor: pallet[2],
    },
    {
      title: '〇〇建設様配達先4',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先5',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[0],
    },
    {
      title: '〇〇建設様配達先6',
      startDate: new Date('2022-02-28 16:45:00'),
      endDate: new Date('2022-02-28 19:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先7',
      startDate: new Date('2022-02-28 18:00:00'),
      endDate: new Date('2022-02-28 19:00:00'),
      backgroundColor: pallet[2],
    },
    {
      title: '〇〇建設様配達先8',
      startDate: new Date('2022-02-28 18:00:00'),
      endDate: new Date('2022-02-28 20:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先9',
      startDate: new Date('2022-02-28 19:00:00'),
      endDate: new Date('2022-02-28 20:00:00'),
      backgroundColor: pallet[1],
    },
  ],
  [dateInitForDemo + 1]: [
    {
      title: '〇〇建設様配達先3',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 12:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先4',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 12:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先5',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 12:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先1',
      startDate: new Date('2022-02-28 14:30:00'),
      endDate: new Date('2022-02-28 16:45:00'),
      backgroundColor: pallet[0],
    },
    {
      title: '〇〇建設様配達先2',
      startDate: new Date('2022-02-28 14:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[1],
    },
    {
      title: '〇〇建設様配達先6',
      startDate: new Date('2022-02-28 14:00:00'),
      endDate: new Date('2022-02-28 18:00:00'),
      backgroundColor: pallet[1],
    },
  ],
};

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
            {new EventRangeDisplayCalculator<CalenderEventInput>(
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
                      backgroundColor: event.backgroundColor,
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
                d.date.getDay() === DayMap['SATURDAY'] ? 'saturday' : '',
                d.date.getDay() === DayMap['SUNDAY'] ? 'sunday' : '',
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

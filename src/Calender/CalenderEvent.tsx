import React, { CSSProperties } from 'react';

export type CalenderEventInput = {
  startDate: Date;
  endDate: Date;
  title: string;
  backgroundColor: CSSProperties['backgroundColor'];
};
type CalenderEventProps = {
  event: CalenderEventInput;
  style?: CSSProperties;
};
export const CalenderEvent: React.FC<CalenderEventProps> = (props) => {
  return (
    <div
      className={'calender-event'}
      style={props?.style}
    >
      <div className={'calender-event-front'}>
        <div>{props.event.title}</div>
      </div>
    </div>
  );
};

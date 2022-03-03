import React, { CSSProperties } from 'react';
import { withoutBorderOverlap, makeClassName } from './calender-helper';

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
      className={makeClassName(['calender-event', withoutBorderOverlap() ? '' : 'overlap-border'])}
      style={props?.style}
    >
      <div className={'calender-event-front'}>
        <div>{props.event.title}</div>
      </div>
    </div>
  );
};

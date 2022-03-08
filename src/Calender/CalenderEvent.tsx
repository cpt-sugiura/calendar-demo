import React, { CSSProperties } from 'react';
import { CalenderItemModal } from './Modal/CalenderItemModal';

type CalenderEventOnCalender = {
  startDate: Date;
  endDate: Date;
  title: string;
  color?: CSSProperties['color'];
  backgroundColor: CSSProperties['backgroundColor'];
};
export type CalenderEventCanBeOnModal = CalenderEventOnCalender & {
  lat: number;
  lng: number;
  accountName: string;
  phoneNumber: string;
  distName: string;
  carryMethod: string;
  weight: string;
  operator: string;
  info: string;
  freeText: string;
};
type CalenderEventProps = {
  event: CalenderEventCanBeOnModal;
  style?: CSSProperties;
};
export const CalenderEvent: React.FC<CalenderEventProps> = (props) => {
  return (
    <CalenderItemModal item={props.event}>
      <div className={'calender-event'} style={props?.style}>
        <div className={'calender-event-front'}>
          <div className={'main-text'}>
            {props.event.title}
          </div>
        </div>
        <div className={'for-overflow-text'}>{props.event.title}</div>
      </div>
    </CalenderItemModal>
  );
};

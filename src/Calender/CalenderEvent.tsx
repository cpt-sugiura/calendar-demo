import React, {CSSProperties} from 'react';
import {CalenderItemModal} from "./Modal/CalenderItemModal";

type CalenderEventOnCalender = {
  startDate: Date;
  endDate: Date;
  title: string;
  backgroundColor: CSSProperties['backgroundColor'];
};
export type CalenderEventCanBeOnModal = CalenderEventOnCalender & Partial<{
  lat: number;
  lng: number;
  accountName: string;
  phoneNumber: string;
  distName: string;
  carryMethod: string;
  weight: string;
  operator: boolean;
  info: string;
  freeText: string;
}>
type CalenderEventProps = {
  event: CalenderEventCanBeOnModal;
  style?: CSSProperties;
};
export const CalenderEvent: React.FC<CalenderEventProps> = (props) => {
  return (
    <CalenderItemModal item={props.event}>
      <div
        className={'calender-event'}
        style={props?.style}
      >
        <div className={'calender-event-front'}>
          <div>{props.event.title}</div>
        </div>
      </div>
    </CalenderItemModal>
  );
};

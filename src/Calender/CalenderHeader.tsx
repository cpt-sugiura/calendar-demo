import React, { useState } from 'react';
import { useDateTimeFormatters } from './useDateTimeFormatters';
type HeaderProps = {
  onChangeDisplayType: DisplaySelectorRadioBoxProps['onChange'];
};
export const CalenderHeader: React.FC<HeaderProps> = (props) => {
  const { dateFormatter } = useDateTimeFormatters();
  return (
    <div className={'calender-header'}>
      <h3>{dateFormatter(new Date())}</h3>
      <DisplaySelectorRadioBox onChange={props.onChangeDisplayType} />
    </div>
  );
};

export type DisplayType = 'TODAY' | 'CURRENT_WEEK' | 'NEXT_WEEK';
type DisplaySelectorRadioBoxProps = {
  onChange: (v: DisplayType) => void;
};
const DisplaySelectorRadioBox: React.FC<DisplaySelectorRadioBoxProps> = (props) => {
  const [displayType, setDisplayTYpe] = useState<DisplayType>('CURRENT_WEEK');
  const handleChangeDisplayType = (newType: DisplayType) => {
    setDisplayTYpe(newType);
    props.onChange(newType);
  };
  return (
    <div className={'display-selector-radio-box'}>
      <DisplaySelector onClick={() => handleChangeDisplayType('TODAY')} active={displayType === 'TODAY'}>
        今日
      </DisplaySelector>
      <DisplaySelector onClick={() => handleChangeDisplayType('CURRENT_WEEK')} active={displayType === 'CURRENT_WEEK'}>
        今週
      </DisplaySelector>
      <DisplaySelector onClick={() => handleChangeDisplayType('NEXT_WEEK')} active={displayType === 'NEXT_WEEK'}>
        来週
      </DisplaySelector>
    </div>
  );
};

type DisplaySelectorProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  active: boolean;
};

const DisplaySelector: React.FC<DisplaySelectorProps> = (props) => {
  return (
    <div className={['display-selector', props.active ? 'active' : ''].join(' ').trim()} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

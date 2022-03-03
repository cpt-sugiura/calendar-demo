import React, { CSSProperties } from 'react';

export const CalenderTimeMarker: React.FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <div className={'calender-current-time-marker'} style={style}>
      <div className={'circle'} />
      <div className={'bar'} />
    </div>
  );
};

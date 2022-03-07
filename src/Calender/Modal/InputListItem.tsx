import React from 'react';
import { ImgLikeIcon } from './ImgLikeIcon';

export const InputListItem: React.FC<{
  imgSrc: string;
  text: string | JSX.Element;
}> = ({ imgSrc, text }) => {
  return (
    <div className={'input-list-item'}>
      <ImgLikeIcon src={imgSrc} />
      <div>{text}</div>
    </div>
  );
};

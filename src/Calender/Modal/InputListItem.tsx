import React from "react";

export const InputListItem: React.FC<{
  imgSrc: string;
  text: string|JSX.Element;
}> = ({imgSrc, text}) => {
  return <div className={'input-list-item'}>
    <img src={imgSrc} alt="" />
    <div>{text}</div>
  </div>

}

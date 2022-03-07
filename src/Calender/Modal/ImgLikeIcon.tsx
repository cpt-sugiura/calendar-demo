import React, {DetailedHTMLProps} from "react";

export function ImgLikeIcon(props: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement> ) {
  return <img src={props.src} {...props} className={"img-like-icon"}/>;
}

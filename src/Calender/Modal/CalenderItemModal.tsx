import React, {useState} from "react";
import {CalenderEventCanBeOnModal} from "../CalenderEvent";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {GrFormClose} from "react-icons/gr";
import './CalenderItemModal.scss';
import {IoMdTime} from "react-icons/all";
import {useDateTimeFormatters} from "../useDateTimeFormatters";
import {InputListItem} from "./InputListItem";

type CalenderItemModalProps = {
  item: CalenderEventCanBeOnModal
}
export const CalenderItemModal: React.FC<CalenderItemModalProps> = (props) => {
  const {item} = props;
  item.freeText = item.freeText || `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト`;
  item.accountName = item.accountName || '清水';
  item.phoneNumber = item.phoneNumber || '090-XXXX-XXX';

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const {dmf} = useDateTimeFormatters();
  return <>
    <div onClick={handleOpen}>
      {props.children}
    </div>
    <Dialog open={open} onClose={handleClose} className={'calender-item-modal'}>
      <DialogTitle>
        <div className={"calender-item-modal-title"}>
          <div>
            {item.title}
          </div>
          <div className={'icon-box'}>
            <BiDotsVerticalRounded/>
            <GrFormClose/>
          </div>
        </div>
      </DialogTitle>
      <DialogContent className={"calender-item-modal-content"}>
        <div className={'inputList'}>
          <div className={'accounts'}>
            <div><span>担当: </span><span>{item.accountName}</span></div>
            <div><span>TEL: </span><span>{item.phoneNumber}</span></div>
          </div>
          <InputListItem imgSrc={'assets/time.webp'} text={<span>{dmf(item.startDate)}<wbr/>～<wbr/>{dmf(item.endDate)}</span>}/>
          <InputListItem imgSrc={'assets/soil.webp'} text={`${item.distName}`}/>
          <InputListItem imgSrc={'assets/dump.webp'} text={`${item.carryMethod}`}/>
          <InputListItem imgSrc={'assets/mount.webp'} text={`${item.weight}`}/>
          <InputListItem imgSrc={'assets/ope.webp'} text={`${item.operator}`}/>
          <InputListItem imgSrc={'assets/info.webp'} text={`${item.info}`}/>
        </div>
        <div className={"chart"}></div>
        <div className={'freeText'}>
          {item.freeText}
        </div>
      </DialogContent>
    </Dialog>
  </>
}

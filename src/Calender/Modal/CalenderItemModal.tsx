import React, { useState } from 'react';
import { CalenderEventCanBeOnModal } from '../CalenderEvent';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import './CalenderItemModal.scss';
import { useDateTimeFormatters } from '../useDateTimeFormatters';
import { InputListItem } from './InputListItem';
import { MapChart } from './MapChart';
import { ImgLikeIcon } from './ImgLikeIcon';
import { DeleteBtn } from './DeleteBtn';

type CalenderItemModalProps = {
  item: CalenderEventCanBeOnModal;
};
export const CalenderItemModal: React.FC<CalenderItemModalProps> = (props) => {
  const { item } = props;
(new DataTransfer()).items
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { dmf } = useDateTimeFormatters();
  return (
    <>
      <div onClick={handleOpen}>{props.children}</div>
      <Dialog open={open} onClose={handleClose} className={'calender-item-modal'}>
        <DialogTitle>
          <div className={'calender-item-modal-title'}>
            <div>{item.title}</div>
            <div className={'icon-box'}>
              <BiDotsVerticalRounded onClick={() => alert('未実装です')} />
              <GrFormClose onClick={handleClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent className={'calender-item-modal-content'}>
          <div className={'inputList'}>
            <div className={'accounts'}>
              <div>
                <span>担当: </span>
                <span>{item.accountName}</span>
              </div>
              <div>
                <span>TEL: </span>
                <span>{item.phoneNumber}</span>
              </div>
            </div>
            <InputListItem
              imgSrc={'assets/time.webp'}
              text={
                <span>
                  {dmf(item.startDate)}
                  <wbr />～<wbr />
                  {dmf(item.endDate)}
                </span>
              }
            />
            <InputListItem imgSrc={'assets/soil.webp'} text={`${item.distName}`} />
            <InputListItem imgSrc={'assets/dump.webp'} text={`${item.carryMethod}`} />
            <InputListItem imgSrc={'assets/mount.webp'} text={`${item.weight}`} />
            <InputListItem imgSrc={'assets/ope.webp'} text={`${item.operator}`} />
            <InputListItem imgSrc={'assets/info.webp'} text={`${item.info}`} />
          </div>
          <div className={'mapChart'}>
            <MapChart lat={item.lat} lng={item.lng} />
          </div>
          <div className={'freeText'}>{item.freeText}</div>
          <div className={'pdfIconBox'}><ImgLikeIcon src={'assets/pdf.webp'} onClick={() => alert('未実装です')} /></div>
        </DialogContent>
        <div className={'calender-item-modal-footer'}>
          <div>
            <DeleteBtn deleteBtn={<ImgLikeIcon src={'assets/waste.webp'} />} deleteAction={() => alert('未実装です')} />
          </div>
          <div>
            <ImgLikeIcon src={'assets/edit.webp'} onClick={() => alert('未実装です')} />
            <ImgLikeIcon src={'assets/print.webp'} onClick={() => alert('未実装です')} />
          </div>
        </div>
      </Dialog>
    </>
  );
};

import React, { Fragment, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Popper,
  PopperProps,
  Typography,
} from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';

type DeleteBtnProps = {
  isDeleting?: boolean;
  label?: string | JSX.Element;
  deleteBtn?: JSX.Element;
  deleteAction?: () => void;
  ButtonProps?: ButtonProps;
};

const errorColor = {
  dark: '#d90000',
  contrastText: '#f2f2f2',
};

export const DeleteBtn = (props: DeleteBtnProps) => {
  const [deletePopAnchor, setDeletePopAnchor] = useState<PopperProps['anchorEl']>(null);
  const handleOpen: React.MouseEventHandler<HTMLElement> = (e) => setDeletePopAnchor(e.currentTarget);
  let deleteBtnElement: JSX.Element | JSX.Element[] | null;
  if (props.deleteBtn) {
    deleteBtnElement = React.Children.map(props.deleteBtn, (deleteBtnEl) => {
      // child が React の要素として問題ないかをチェック
      if (React.isValidElement(deleteBtnEl)) {
        // child を元に新たな要素を生成
        // @ts-ignore
        return React.cloneElement(deleteBtnEl, { onClick: handleOpen });
      }
      return deleteBtnEl;
    });
  } else {
    deleteBtnElement = (
      <Button
        className="delete-btn"
        {...props.ButtonProps}
        style={{
          backgroundColor: errorColor.dark,
          color: errorColor.contrastText,
        }}
        onClick={handleOpen}
      >
        {props.label || '削除'}
      </Button>
    );
  }
  return (
    <Fragment>
      {deleteBtnElement}
      <Popper open={!!deletePopAnchor} anchorEl={deletePopAnchor} placement="top-start" style={{ zIndex: 3000 }}>
        <Card elevation={3} style={{ backgroundColor: '#d90000', color: '#fafafa' }}>
          <CardContent>
            <Typography variant="body2" component="p">
              データを削除します。
              <br />
              宜しいですか？
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button style={{ backgroundColor: '#fff', color: '#292929' }} onClick={() => setDeletePopAnchor(null)}>
              いいえ
            </Button>
            <Button style={{ backgroundColor: '#fff', color: '#292929' }} onClick={props.deleteAction}>
              {props.isDeleting ? <CircularProgress color="secondary" /> : 'はい'}
            </Button>
          </CardActions>
        </Card>
      </Popper>
    </Fragment>
  );
};

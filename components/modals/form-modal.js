// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  title: string,
  subTitle: string,
  submitBtnText: string,
  open: boolean,
  toggleModal: Function,
  handleConfirm: Function,
  cancelBtnText: Function,
  children: any,
};

const FormDialog = (props: Props) => {
  const {
    open,
    toggleModal,
    title,
    subTitle,
    submitBtnText,
    cancelBtnText,
    handleConfirm,
    children,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={toggleModal}
      fullWidth={true}
      maxWidth={'md'}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subTitle}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal} color="primary">
          {cancelBtnText || 'Cancel'}
        </Button>
        <Button onClick={handleConfirm} color="primary">
          {submitBtnText || 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export { FormDialog };

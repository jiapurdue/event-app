import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import styles from "../../assets/jss/components/alertBoxStyle";

const useStyles = makeStyles(styles);

const AlertBox = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  if (props.isOpen) {
    setOpen(true);
  }

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="default"
              size="medium"
              onClick={() => {
                setOpen(false);
                props.handleAlertClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton> 
          }
        >
          You have been successfully registered!
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertBox;

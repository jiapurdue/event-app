import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { LoremIpsum } from "lorem-ipsum";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/pages/eventDetailStyle";

const useStyles = makeStyles(styles);

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const sentences = lorem.generateParagraphs(2);

const EventDetail = () => {
  const classes = useStyles();

  const { id, title, date } = useParams();
  const [errorImage, setErrorImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageItem, setImageItem] = useState([]);
  const [open, setOpen] = useState(false);
  const [eventDetail, setEventDetail] = useState(sentences);

  //The Lorem Ipsum for photos.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://picsum.photos/id/${id}/info`);
        setImageItem(result.data);
        setIsImageLoaded(true);
        setEventDetail(sentences);
      } catch (error) {
        setIsImageLoaded(true);
        setErrorImage(error);
      }
    };
    fetchData();
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (errorImage) {
    return <div>Error: {errorImage.message}</div>;
  } else if (!isImageLoaded) {
    return <div>Loading Data...</div>;
  } else {
    return (
      <main className={classNames(classes.root)}>
        <Grid container spacing={3} className={classes.containerDetails}>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={10} md={8}>
            <div className={classes.cardDetails}>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                <div
                  key={date}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EventRoundedIcon className={classes.icon} />
                  {date}
                </div>
              </Typography>

              <Typography variant="subtitle1">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleRoundedIcon className={classes.icon} />
                  Host by: {imageItem.author}
                </div>
              </Typography>

              <Typography variant="subtitle1">Event details:{eventDetail}</Typography>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<KeyboardArrowRightIcon />}
                onClick={handleClickOpen}
              >
                Register Event
              </Button>
            </div>
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={8}>
            <img
              src={`${imageItem.download_url}.jpg`}
              alt={title}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register the Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email address to register the event.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    );
  }
};

export default EventDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

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

const EventDetail = () => {
  const classes = useStyles();

  const { id, title, date } = useParams();

  console.log(useParams());

  const [errorImage, setErrorImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageItem, setImageItem] = useState([]);

  //The Lorem Ipsum for photos.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://picsum.photos/id/${id}/info`);
        setImageItem(result.data);
        setIsImageLoaded(true);
      } catch (error) {
        setIsImageLoaded(true);
        setErrorImage(error);
      }
    };
    fetchData();
  }, [id]);

  if (errorImage) {
    return <div>Error: {errorImage.message}</div>;
  } else if (!isImageLoaded) {
    return <div>Loading Data...</div>;
  } else {
    console.log(imageItem.download_url);

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
                {date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Host by: {imageItem.author}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                Event details: {lorem.generateParagraphs(2)}
              </Typography>
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
      </main>
    );
  }
};

export default EventDetail;

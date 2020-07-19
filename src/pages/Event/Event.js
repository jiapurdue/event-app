import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import EventCard from "../../components/EventCard";
import styles from "../../assets/jss/pages/eventStyle";

const useStyles = makeStyles(styles);

const Event = () => {
  const classes = useStyles();

  const [errorEvent, setErrorEvent] = useState(null);
  const [isEventLoaded, setIsEventLoaded] = useState(false);
  const [eventItems, setEventItems] = useState([]);

  //   const [errorImage, setErrorImage] = useState(null);
  //   const [isImageLoaded, setIsImageLoaded] = useState(false);
  //   const [imageItems, setImageItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsEventLoaded(true);
          setEventItems(result);
        },
        (error) => {
          setIsEventLoaded(true);
          setErrorEvent(error);
        }
      );
  }, []);

  //The Lorem Ipsum for photos.
  //   useEffect(() => {
  //     fetch("https://picsum.photos/v2/list?page=2&limit=100")
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           setIsImageLoaded(true);
  //           setImageItems(result);
  //         },
  //         (error) => {
  //           setIsImageLoaded(true);
  //           setErrorImage(error);
  //         }
  //       );
  //   }, []);

  if (errorEvent) {
    return <div>Error: {errorEvent.message}</div>;
  } else if (!isEventLoaded) {
    return <div>Loading Data...</div>;
  } else {
    return (
      <main className={classNames(classes.root)}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
        >
          <Grid item md={12} className={classNames(classes.eventContainer)}>
            <Grid item md={12}>
              <Paper className={classes.eventTitlePaper}>
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  className={classes.eventTitle}
                >
                  Explore All Events
                </Typography>
              </Paper>
            </Grid>

            <Grid container className={classes.eventCardContainer}>
              <ul>
                {eventItems.map((item, index) => 
                  index < 10 ? <EventCard key={index} title={item.title} imgUrl={item.url}/> : null
                )}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
};

export default Event;

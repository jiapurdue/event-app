import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import EventCard from "../../components/EventCard";
import styles from "../../assets/jss/pages/eventStyle";

import * as moment from "moment";
import * as DateGenerator from "random-date-generator";
import axios from "axios";

const getRadomDate = () => {
  let startDate = new Date();
  let endDate = new Date(2020, 12, 12);
  return moment(DateGenerator.getRandomDateInRange(startDate, endDate)).format(
    "ll"
  );
};

const truncateStr = (str, n, useWordBoundary) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  );
};

const useStyles = makeStyles(styles);

const Event = () => {
  const classes = useStyles();

  const [errorEvent, setErrorEvent] = useState(null);
  const [isEventLoaded, setIsEventLoaded] = useState(false);
  const [eventItems, setEventItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setEventItems(result.data);
        console.log(result.data);
        setIsEventLoaded(true);
      } catch (error) {
        setIsEventLoaded(true);
        setErrorEvent(error);
      }
    };
    fetchData();
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
        <Grid container direction="row" justify="center" alignItems="stretch">
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

            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="baseline"
              className={classes.eventCardContainer}
            >
              {eventItems.map((item, index) =>
                index < 6 ? (
                  <EventCard
                    key={index}
                    title={truncateStr(item.title, 35)}
                    fullTitle={item.title}
                    imgUrl={item.url}
                    date={getRadomDate()}
                    id={item.id}
                  />
                ) : null
              )}
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
};

export default Event;

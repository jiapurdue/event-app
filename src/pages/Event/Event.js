import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import styles from "../../assets/jss/pages/eventStyle";

const useStyles = makeStyles(styles);

const Event = () => {
  const classes = useStyles();

  return (
    <main className={classNames(classes.root)}>
      <Grid container direction="row" justify="flex-end" alignItems="baseline">
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
        </Grid>
      </Grid>
    </main>
  );
};

export default Event;

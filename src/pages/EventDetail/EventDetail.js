import React from "react";
import { useParams } from "react-router-dom";

import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/pages/eventStyle";

const useStyles = makeStyles(styles);

const EventDetail = () => {
  const classes = useStyles();

  const {id} = useParams();

return <div>{id}</div>;
};

export default EventDetail;

import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";

import styles from "../../assets/jss/components/eventCardStyle";

const useStyles = makeStyles(styles);

const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

// console.log(truncateStr('Accusamus Beatae Ad Facilis Cum Similique Qui Sunt', 25));

const EventCard = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const eventId = props.id;
  const eventTitle = titleCase(props.fullTitle);
  const eventDate = props.date;

  const handleButtonClick = () => {
    history.push(`/event/${eventId}/${eventTitle}/${eventDate}`);
  };

  return (
    <Grid item xs={4} className={classes.cardGrid}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="category" className={classes.avatar}>
              {props.title.toUpperCase()[0]}
            </Avatar>
          }
          title={titleCase(props.title)}
          subheader={props.date}
        />

        <CardMedia
          className={classes.media}
          image={props.imgUrl}
          title={props.title.toUpperCase()}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button size="small" color="primary" onClick={handleButtonClick}>
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EventCard;

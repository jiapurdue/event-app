import { red } from "@material-ui/core/colors";

const eventCardStype = (theme) => ({
  root: {
    maxWidth: "28vw",
  },

  title: {
    fontSize: 10,
  },

  cardGrid: {
    paddingTop: '1rem',
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  avatar: {
    backgroundColor: red[500],
  },

  /* ----------- Non-Retina Screens ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    root: {
        maxWidth: "25vw",
      },
  },
});

export default eventCardStype;

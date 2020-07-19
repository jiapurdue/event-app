const eventDetailStyle = (theme) => ({
  root: {
    flexGrow: 1,
  },

  card: {
    display: "flex",
  },

  icon: {
    paddingRight: "1rem",
  },

  containerDetails: {
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "none",
    width: "100%",
    minHeight: "95vh",
    zIndex: "1",
  },

  image: { maxWidth: "60vw", maxheight: "40wh" },

  button: {
    margin: theme.spacing(1),
  },
});

export default eventDetailStyle;

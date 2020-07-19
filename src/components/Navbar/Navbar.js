import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../../assets/jss/components/navbarStyle.js";

const useStyles = makeStyles(styles);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" className={classes.AppBar} position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="default"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>{" "}
          </Link>
          <Typography variant="h5" className={classes.title}>
            My Event Application
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

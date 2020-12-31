import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../FacebookLogin/FacebookLogin";

const useStyles = makeStyles((theme) => ({
  block: {
    margin: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "white",
    background: theme.palette.primary.main,
    borderRadius: 5,
    padding: theme.spacing(1, 3),
    marginRight: theme.spacing(3),
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  login: {
    marginLeft: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <Link to="/" className={classes.link}>
        Persons
      </Link>
      <Link to="/favorites" className={classes.link}>
        Favorites
      </Link>
      <div className={classes.login}>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import PersonInformation from "../PersonBlock/PersonInformation/PersonInformation";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
    },
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const { favorites } = useSelector((state) => state.people);
  return (
    <div className={classes.root}>
      {favorites.length ? (
        <Grid container spacing={2}>
          {favorites.map((person) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={person.name}>
                <Paper className={classes.paper}>
                  <PersonInformation person={person} favorites={favorites} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <p className={classes.text}>Nothing added to favorites</p>
      )}
    </div>
  );
};

export default Favorites;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../../store/getAllPeople/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonInformation from "./PersonInformation/PersonInformation";
import Spinner from "../Spinner/Spinner";

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
}));

const PersonBlock = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { loading, error, people, favorites } = useSelector(
    (state) => state.people
  );

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("redux"));
    if (storage !== null) {
      return true;
    } else {
      dispatch(fetchPeople());
    }
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (error) return <h2>Sorry! Something went wrong</h2>;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {people.map((person) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={person.name}>
              <Paper className={classes.paper}>
                <PersonInformation person={person} favorites={favorites} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PersonBlock;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Spinner from "../../Spinner/Spinner";
import { fetchPersonDetails } from "../../../store/getPersonDetails/action";

const useStyles = makeStyles((theme) => ({
  block: {
    background: "#ece9e9",
    padding: theme.spacing(4),
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  name: {
    textTransform: "uppercase",
    display: "block",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 200,
    height: 225,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up("sm")]: {
      width: 300,
      height: 400,
      marginRight: 20,
    },
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
}));

const PersonDetails = ({ id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { people } = useSelector((state) => state.people);
  const details = people.find((item) => item.id === id);

  const { vehicles, films, loading, error } = useSelector(
    (state) => state.details
  );

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;

  if (error) return <h2>Sorry! Something went wrong</h2>;

  return (
    <div className={classes.block}>
      <div>
        <h2 className={classes.text}>{details.name}</h2>
        <img className={classes.img} src={details.image} alt={details.name} />
      </div>
      <div>
        <span className={classes.name}>Height: </span>
        <span className={classes.text}>{details.height}</span>
        <span className={classes.name}>Mass: </span>
        <span className={classes.text}>{details.mass}</span>
        <span className={classes.name}>Hair color: </span>
        <span className={classes.text}>{details.hair_color}</span>
        <span className={classes.name}>Skin color: </span>
        <span className={classes.text}>{details.skin_color}</span>
        <span className={classes.name}>Eye color: </span>
        <span className={classes.text}>{details.eye_color}</span>
        <span className={classes.name}>Birth year: </span>
        <span className={classes.text}>{details.birth_year}</span>
        <span className={classes.name}>Gender: </span>
        <span className={classes.text}>{details.gender}</span>
        <span className={classes.name}>Homeworld: </span>
        <span className={classes.text}>{details.homeworld}</span>
        <span className={classes.flex}>
          <span className={classes.name}>Vehicles: </span>
          {vehicles.length
            ? vehicles.map(({ name, model }) => (
                <React.Fragment key={name}>
                  <span className={classes.text}>{name}</span>
                  <span className={classes.text}>{model}</span>
                </React.Fragment>
              ))
            : "-"}
        </span>
        <span className={classes.flex}>
          <span className={classes.name}>Films:</span>
          {films.map((title) => (
            <span key={title} className={classes.text}>
              {title}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

PersonDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PersonDetails;

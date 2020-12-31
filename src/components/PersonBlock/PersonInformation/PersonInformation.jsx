import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalWindow from "../../ModalWindow/ModalWindow";
import PropTypes from "prop-types";
import PersonDetails from "../PersonDetails/PersonDetails";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useDispatch } from "react-redux";
import { addToFavoriteList } from "../../../store/getAllPeople/action";
import withModalWindow from "../../../hoc/withModalWindow";

const useStyles = makeStyles((theme) => ({
  block: {
    "&:hover > img": {
      transform: "scale(1.1)",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
  img: {
    height: "50%",
    width: "60%",
    margin: theme.spacing(3, 0),
    transition: "ease 0.3s",
  },
  color: {
    color: "black",
    width: "auto",
    borderRadius: 20,
    padding: theme.spacing(1),
  },
  type: {
    padding: theme.spacing(1),
    fontSize: 18,
    fontStyle: "italic",
  },
}));

const PersonInformation = ({ person, favorites, handleOpenModal, showModal, handleCloseModal }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const likes = favorites.find(({ id }) => id === person.id);

  const addToFavorite = () => {
    dispatch(addToFavoriteList(person));
  };

  return (
    <>
      <div className={classes.block}>
        <div onClick={handleOpenModal}>
          <h2 className={classes.title}>{person.name}</h2>
          <img className={classes.img} src={person.image} alt={person.name} />
          <p className={classes.color}>Genre: {person.gender}</p>
          <p className={classes.color}>Homeworld: {person.homeworld}</p>
        </div>
        <div onClick={addToFavorite}>
          <ThumbUpIcon color={likes ? "secondary" : "primary"} />
        </div>
      </div>
      {showModal && (
        <ModalWindow closeModal={handleCloseModal} showModal={showModal}>
          <PersonDetails id={person.id} />
        </ModalWindow>
      )}
    </>
  );
};

PersonInformation.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

const WithModalPersonInformation = withModalWindow(PersonInformation)

export default WithModalPersonInformation;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MAutocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import ModalWindow from "../ModalWindow/ModalWindow";
import PersonDetails from "../PersonBlock/PersonDetails/PersonDetails";
import { makeStyles } from "@material-ui/core/styles";
import withModalWindow from "../../hoc/withModalWindow";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(2),
    width: 300,
  },
}));

const Autocomplete = ({ handleOpenModal, showModal, handleCloseModal }) => {
  const classes = useStyles();
  const { people } = useSelector((state) => state.people);
  const [personId, setPersonId] = useState(null);

  const handleClick = (e, value) => {
    const person = people.find(({ name }) => name === value);
    setPersonId(person.id);
    handleOpenModal();
  };

  return (
    <>
      {showModal && (
        <ModalWindow closeModal={handleCloseModal} showModal={showModal}>
          <PersonDetails id={personId} />
        </ModalWindow>
      )}
      <div>
        <MAutocomplete
          className={classes.input}
          freeSolo
          autoComplete
          onChange={handleClick}
          disableClearable
          options={people.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search persons"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    </>
  );
};

const WithModalAutocomplete = withModalWindow(Autocomplete)

export default WithModalAutocomplete;

import React from "react";
import FacebookLogin from "react-facebook-login";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut } from "../../store/login/action";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    borderRadius: "50%",
    height: "fit-content",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(0, 1),
    "& p": {
      margin: 0,
    },
  },
  btn: {
    height: "fit-content",
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const info = useSelector((state) => state.login);

  const responseFacebook = (response) => {
    if (!response.status) {
      dispatch(login(response));
    }
  };

  return (
    <>
      {info.isLoggedIn ? (
        <div className={classes.block}>
          <img src={info.picture} alt={info.name} className={classes.img} />
          <div className={classes.text}>
            <p>Welcome, {info.name}</p>
            <p>Email: {info.email}</p>
          </div>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </div>
      ) : (
        <FacebookLogin
          appId="1437864996545074"
          fields="name,email,picture"
          icon="fa-facebook"
          size="small"
          callback={responseFacebook}
        />
      )}
    </>
  );
};

export default Login;

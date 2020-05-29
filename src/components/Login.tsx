import * as React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { connect } from "react-redux";
import { getRentalOffersCurrent } from "../reducer/selectors";
import { ActionCreator } from "../reducer/reducer";
import * as validator from "email-validator";
import Header from "./Header";

interface Props {
  setLoginStatus: (status: boolean) => void,
}

const SignIn: React.FunctionComponent<Props> = (props: Props) => {

  const eMailRef = useRef(null);
  const PasswordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(``);


  const HandleSubmitEnter = () => {
    if (!validator.validate(eMailRef.current.value)) {
      setErrorMessage(`Введите корретный E-mail`);
      return;
    }

    if (!PasswordRef.current.value) {
      setErrorMessage(`Введите пароль`);
      return;
    }

    axios.post(`https://htmlacademy-react-3.appspot.com/six-cities/login`,{
      email: eMailRef.current.value,
      password: PasswordRef.current.value
    }, { withCredentials: true } ).then((response) => {
        if (response.status === 200) {
          props.setLoginStatus(true);
          setErrorMessage(``);
          window.location.href = '/';
        }
      });
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                HandleSubmitEnter();
              }}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={eMailRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={PasswordRef}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {errorMessage}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rentalOffersCurrent: getRentalOffersCurrent(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLoginStatus: (loginStatus) => {
    dispatch(ActionCreator.setLoginStatus(loginStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

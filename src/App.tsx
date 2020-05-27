import * as React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { RentalOffersInterface } from "./types";
import {Route, Switch, Router, Redirect} from "react-router-dom";
import { ActionCreator } from "./reducer/reducer";
import axios from "axios";
import history from "../history";
import Main from "./components/Main";
import OfferPage from "./components/OfferPage";

interface Props {
  rentalOffers: RentalOffersInterface,
  setRentalOffersList: (data: Object) => void,
}

const App: React.SFC<Props> = (props: Props) => {
  const rentalOffers = props.rentalOffers;

  useEffect(() => {
    if (props.rentalOffers.length === 0) {
      axios.get(`https://htmlacademy-react-3.appspot.com/six-cities/hotels`).then((response) => {
        props.setRentalOffersList(response.data);
      });
    }
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/offer/:id" render={(props) => {
          const chosenOffer = rentalOffers.find((offer) => offer.id == props.match.params.id);
          return chosenOffer && (
            <OfferPage
              rentalOffer={chosenOffer}
            />
          );
        }}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  rentalOffers: state.rentalOffersList,
});

const mapDispatchToProps = (dispatch) => ({
  setRentalOffersList: (offersList) => {
    dispatch(ActionCreator.setRentalOffersList(offersList));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

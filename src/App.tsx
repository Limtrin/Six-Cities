import * as React from "react";
import Main from "./components/Main";
import OfferPage from "./components/OfferPage";
import { RentalOffersInterface } from "./types";
import {Route, Switch, Router, Redirect} from "react-router-dom";
import history from "../history";

interface Props {
  rentalOffers: RentalOffersInterface
}

const App: React.SFC<Props> = (props: Props) => {
  const rentalOffers = props.rentalOffers;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main
            rentalOffers={rentalOffers}
          />
        </Route>
        <Route exact path="/offer/:id" render={(props) => {
          // Здесь надо запилить обращение к API по offer id, это временное решение
          const chosenOffer = rentalOffers.find((offer) => offer.id == props.match.params.id);
          return chosenOffer && (
            <OfferPage
              rentalOffer={chosenOffer}
              // Это тоже пока временно, всё вообще будет формироваться на серваке
              rentalOffers={rentalOffers}
            />
          );
        }}
        />
      </Switch>
    </Router>
  );
};

export default App;

import * as React from "react";
import Main from "./components/Main";
import { RentalOffersInterface } from "./types";

interface Props {
  rentalOffers: RentalOffersInterface
}

const App: React.SFC<Props> = (props: Props) => {
  return (
    <Main
      rentalOffers={props.rentalOffers}
    />
  );
};

export default App;

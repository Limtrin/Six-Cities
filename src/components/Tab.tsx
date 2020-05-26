import * as React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../reducer/reducer";

interface Props {
  city: string,
  currentCity: string,
  changeCurrentCity: (city: string) => void,
}

const Tab: React.FunctionComponent<Props> = ({city, currentCity, changeCurrentCity}: Props) => {
  return (
    <li
      onClick={() => {
        if (city !== currentCity) changeCurrentCity(city);
      }}
      className="locations__item"
    >
      <a
        className={`locations__item-link tabs__item${currentCity === city ? ` tabs__item--active` : ``}`}
        style={city === currentCity ? {cursor: `default`} : null}
      >
        <span>
          {city}
        </span>
      </a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => {
    dispatch(ActionCreator.changeCurrentCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

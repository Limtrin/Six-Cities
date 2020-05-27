import * as React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { RentalOffersInterface } from "../types";
import { ActionCreator } from "../reducer/reducer";

interface Props {
  rentalOffers: RentalOffersInterface,
  currentCity: string,
  seCurrentSortStatus: (sortStatus: string) => void,
  currentSortStatus: string,
}

const SortStatuses = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
]

const Sort: React.FunctionComponent<Props> = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const placesOptionsClasses = `places__options places__options--custom ${isOpened ? `places__options--opened` : null}`;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className="places__sorting-type"
        tabIndex={0}
      >
        {props.currentSortStatus}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesOptionsClasses}>
        {
          SortStatuses.map((sortStatus, index) => (
            <li
              onClick={() => {
                props.seCurrentSortStatus(sortStatus);
                setIsOpened(false);
              }}
              className={`places__option ${sortStatus === props.currentSortStatus ? `places__option--active` : null}`}
              tabIndex={index}
              key={index}
            >
              {sortStatus}
            </li>
          ))
        }
      </ul>
    </form>
  )
};

const mapStateToProps = (state) => ({
  currentSortStatus: state.currentSortStatus,
});

const mapDispatchToProps = (dispatch) => ({
  seCurrentSortStatus: (sortStatus) => {
    dispatch(ActionCreator.seCurrentSortStatus(sortStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

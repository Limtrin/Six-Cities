import * as React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { RentalOfferInterface, RentalOffersInterface } from "../types";
import { capitalize } from "../utils";
import { ActionCreator } from "../reducer/reducer";
import Map from "./Map";
import OfferCard from "./OfferCard";
import ReviewsList from "./ReviewsList";
import Header from "./Header";
import ReviewForm from "./ReviewForm";

interface Props {
  rentalOffer: RentalOfferInterface,
  nearbyOffers: RentalOffersInterface,
  setNearbyOffersList: (data: Object) => void,
  setFocusCityLocation: (dara: number[]) => void,
  changeFavoriteOfferStatus: (data: number) => void,
  isLogin: boolean,
  isFavorite: boolean,
}

const OfferPage: React.FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    axios.get(`https://htmlacademy-react-3.appspot.com/six-cities/hotels/${rentalOffer.id}/nearby`).then((response) => {
      props.setNearbyOffersList(response.data);
    });
  },[props.rentalOffer.id]);

  useEffect(() => {
    props.setFocusCityLocation([rentalOffer.location.latitude, rentalOffer.location.longitude]);
  });

  const handleBookmarkClick = () => {
    axios.post(`https://htmlacademy-react-3.appspot.com/six-cities/favorite/${props.rentalOffer.id}/${+!props.rentalOffer.is_favorite}`, null, { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        props.changeFavoriteOfferStatus(props.rentalOffer.id);
      }
    })
    .catch((error) => {
      return;
    })
  }

  const {rentalOffer, nearbyOffers} = props;

  const ratingPercents = rentalOffer.rating * 20;
  const propertyBookmarkClasses = rentalOffer.is_favorite ? `property__bookmark-button--active` : null;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {rentalOffer.images.slice(0, 6).map((image, index) => (
                <div
                  className="property__image-wrapper"
                  key={index}
                >
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {rentalOffer.is_premium ? 
                <div className="property__mark">
                  <span>Premium</span>
                </div> :
                null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {rentalOffer.title}
                </h1>
                <button className={`property__bookmark-button ${propertyBookmarkClasses} button`} type="button"
                  onClick={() => {
                    handleBookmarkClick();
                  }}
                >
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingPercents + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rentalOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(rentalOffer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {rentalOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {rentalOffer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{rentalOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {rentalOffer.goods.map((good, index) => (
                    <li
                      className="property__inside-item"
                      key={index}
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {rentalOffer.host.is_pro ? 
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="/img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                    </div> :
                    null
                  }
                  <span className="property__user-name">
                    {rentalOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {rentalOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  id={rentalOffer.id}
                />

                {
                  props.isLogin ?
                  <ReviewForm
                    id={rentalOffer.id}
                  /> :
                  null
                }

              </section>
            </div>
          </div>
          <section className="property__map map">
            {nearbyOffers && <Map
              rentalOffers={[rentalOffer].concat(props.nearbyOffers)}
            />}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

                {nearbyOffers.map((nearbyRentalOffer) => (
                  <div
                    onMouseLeave={() => {
                      props.setFocusCityLocation([rentalOffer.location.latitude, rentalOffer.location.longitude])
                    }}
                    key={nearbyRentalOffer.id}
                  >
                    <OfferCard
                      rentalOffer={nearbyRentalOffer}
                      type={`near`}
                    />
                  </div>
                ))}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nearbyOffers: state.nearbyOffersList,
  isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  setNearbyOffersList: (offersList) => {
    dispatch(ActionCreator.setNearbyOffersList(offersList));
  },
  setFocusCityLocation: (focusCityLocation) => {
    dispatch(ActionCreator.setFocusCityLocation(focusCityLocation));
  },
  changeFavoriteOfferStatus: (offerId) => {
    dispatch(ActionCreator.changeFavoriteOfferStatus(offerId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);

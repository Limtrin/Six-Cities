import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { RentalOfferInterface, RentalOffersInterface } from "../types";
import { capitalize } from "../utils";
import { ActionCreator } from "../reducer/reducer";
import Map from "./Map";
import OfferCard from "./OfferCard";
import ReviewsList from "./ReviewsList";

interface Props {
  rentalOffer: RentalOfferInterface,
  nearbyOffers: RentalOffersInterface,
  setNearbyOffersList: (data: Object) => void,
  setFocusCityLocation: (dara: number[]) => void,
}

const OfferPage: React.FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    if (props.nearbyOffers.length === 0) {
      axios.get(`https://htmlacademy-react-3.appspot.com/six-cities/hotels/${rentalOffer.id}/nearby`).then((response) => {
        props.setNearbyOffersList(response.data);
      });
    }
    props.setFocusCityLocation([rentalOffer.location.latitude, rentalOffer.location.longitude])
  });

  const {rentalOffer, nearbyOffers} = props;

  const ratingPercents = rentalOffer.rating * 20;
  const propertyBookmarkClasses = rentalOffer.is_favorite ? `property__bookmark-button--active` : null;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <button className={`property__bookmark-button ${propertyBookmarkClasses} button`} type="button">
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
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              zoom={rentalOffer.location.zoom}
              coordinates={[[rentalOffer.location.latitude, rentalOffer.location.longitude],].concat(props.nearbyOffers.map((offer) => [offer.location.latitude, offer.location.longitude]))}
            />
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
                  >
                    <OfferCard
                      rentalOffer={nearbyRentalOffer}
                      type={`near`}
                      key={nearbyRentalOffer.id}
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
});

const mapDispatchToProps = (dispatch) => ({
  setNearbyOffersList: (offersList) => {
    dispatch(ActionCreator.setNearbyOffersList(offersList));
  },
  setFocusCityLocation: (focusCityLocation) => {
    dispatch(ActionCreator.setFocusCityLocation(focusCityLocation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);

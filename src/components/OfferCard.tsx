import * as React from "react";
import { RentalOfferInterface } from "../types";
import { NavLink } from 'react-router-dom';

type OfferCardType = `cities` | `near`;

interface Props {
  rentalOffer: RentalOfferInterface,
  type: OfferCardType,
}

const cardMainClasses = {
  cities: `cities__place-card`,
  near: `near-places__card`,
}

const imageMainClasses = {
  cities: `cities__image-wrapper`,
  near: `near-places__image-wrapper`,
}

const OfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const {rentalOffer, type} = props;

  const bookmarkClasses = rentalOffer.is_favorite ? `place-card__bookmark-button--active` : null;
  const ratingPercents = rentalOffer.rating * 20;

  return (
    <article
      className={`${cardMainClasses[type]} place-card`}
    >
      {rentalOffer.is_premium ? 
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null
      }
      <div className={`${imageMainClasses[type]} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={rentalOffer.preview_image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentalOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${bookmarkClasses} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercents + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <NavLink to={`/offer/${rentalOffer.id}`}>{rentalOffer.title}</NavLink>
        </h2>
        <p className="place-card__type">{rentalOffer.type}</p>
      </div>
    </article>
  );
};

export default OfferCard;

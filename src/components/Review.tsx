import * as React from "react";
import { Review } from "../types";
import * as moment from "moment";

interface Props {
  review: Review,
}

const Review: React.FunctionComponent<Props> = (props: Props) => {

  const {review} = props;
  const ratingPercents = review.rating * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingPercents + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{moment(review.date).format("MMM D")}</time>
      </div>
    </li>
  );
};

export default Review;

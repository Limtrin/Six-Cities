import * as React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../reducer/reducer";

interface Props {
  id: number,
  setReviewsList: (review: object) => void,
}

const ReviewForm: React.FunctionComponent<Props> = (props: Props) => {

  const textRef = useRef(null);
  const [errorMessage, setErrorMessage] =useState(``);
  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(null);

  const handleFormValidate = () => {
    if (textRef.current.value.length < 50) {
      setErrorMessage(`Слишком короткое сообщение`);
      return false;
    }

    if (textRef.current.value.length > 300) {
      setErrorMessage(`Слишком длинное сообщение`);
      return false;
    }

    if (!rating) {
      setErrorMessage(`Поставьте оценку которую считаете нужной`);
      return false;
    }

    setDisabled(false);
    setErrorMessage(``);
    return true;
  }

  const handleRatingInput = (e) => {
    handleFormValidate();
    setRating(e.target.value);
  }

  const handleFormSubmit = () => {
    if (handleFormValidate()) {
      axios.post(`https://htmlacademy-react-3.appspot.com/six-cities/comments/${props.id}`,{
        comment: textRef.current.value,
        rating: rating
      }, { withCredentials: true } ).then((response) => {
          if (response.status === 200) {
            props.setReviewsList(response.data);
            setErrorMessage(`Ваш отзыв отправлен!`);
            textRef.current.value=``;
            setDisabled(true);
          }
        });
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onClick={(e) => {
            handleRatingInput(e);
          }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" 
          onClick={(e) => {
            handleRatingInput(e);
          }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onClick={(e) => {
            handleRatingInput(e);
          }}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" 
          onClick={(e) => {
            handleRatingInput(e);
          }}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" 
          onClick={(e) => {
            handleRatingInput(e);
          }}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" ref={textRef}
        onInput={() => {
          handleFormValidate();
        }}
      ></textarea>
      {errorMessage}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setReviewsList: (reviewsList) => {
    dispatch(ActionCreator.setReviewsList(reviewsList));
  }
});

export default connect(null, mapDispatchToProps)(ReviewForm);

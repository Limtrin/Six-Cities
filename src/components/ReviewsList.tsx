import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../reducer/reducer";
import Review from "./Review";
import { Reviews } from "../types";

interface Props {
  id: number,
  reviewsList: Reviews,
  setReviewsList: (reviews: Object) => void,
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    axios.get(`https://htmlacademy-react-3.appspot.com/six-cities/comments/${props.id}`).then((response) => {
      props.setReviewsList(response.data);
    });
  }, [props.id]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{props.reviewsList.length}</span></h2>
      <ul className="reviews__list">
        {props.reviewsList.map((comment) => (
          <Review
            review={comment}
            key={comment.id}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  reviewsList: state.reviewsList,
});

const mapDispatchToProps = (dispatch) => ({
  setReviewsList: (reviewsList) => {
    dispatch(ActionCreator.setReviewsList(reviewsList));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

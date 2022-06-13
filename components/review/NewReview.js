import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewReview } from "redux/actions/bookingAction";

const NewReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const reviewData = {
      comment,
      rating,
      roomId: router.query.id,
    };
    dispatch(createNewReview(reviewData));
  };

  const setUserRating = () => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.startValue = index + 1;
      ["click", "mouseover", "mouseout"].forEach((e) => {
        star.addEventListener(e, showRating);
      });
    });
    function showRating(e) {
      stars.forEach((star, index) => {
        if (e.type === "click") {
        }
        if (e.type === "mouseover") {
        }
        if (e.type === "mouseout") {
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <button
            id="review_btn"
            type="button"
            className="btn btn-primary mt-4 mb-5"
            data-toggle="modal"
            data-target="#ratingModal"
          >
            Submit Your Review
          </button>

          <div
            className="modal fade"
            id="ratingModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="ratingModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ratingModalLabel">
                    Submit Review
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <ul className="stars">
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>

                  <textarea
                    name="review"
                    id="review"
                    className="form-control mt-3"
                    value={comment}
                    onChange={(e) => setComment(e.target.valeu)}
                  ></textarea>

                  <button
                    className="btn my-3 float-right review-btn px-4 text-white"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReview;

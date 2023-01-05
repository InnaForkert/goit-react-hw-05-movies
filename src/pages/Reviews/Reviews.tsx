import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReviews } from "../../util/fetchReviews";
import { Review } from "../../components/Review/Review";
import { ReviewType } from "../../interfaces/review";
import { NoReviews } from "./Reviews.styled";

export default function Reviews() {
  const { state } = useLocation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(state.id).then(setReviews);
  }, [state.id]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((el: ReviewType) => <Review data={el} key={el.id} />)
      ) : (
        <NoReviews>No reviews found 🙄</NoReviews>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReviews } from "../../util/fetchReviews";
import { Review } from "../Review/Review";
import { ReviewType } from "../../interfaces/review";
import { Heading } from "../../pages/Home/Home.styled";
import { NoReviews } from "./Reviews.styled";

export function Reviews() {
  const { state } = useLocation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(state.id).then(setReviews);
  }, []);

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

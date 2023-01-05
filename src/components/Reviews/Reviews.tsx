import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReviews } from "../../util/fetchReviews";

export function Reviews() {
  const location = useLocation();
  console.log(location);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews("4545").then(setReviews);
  }, []);

  return <>hi</>;
}

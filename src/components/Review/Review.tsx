import { ReviewType } from "../../interfaces/review";
import { Author, Quote, ReviewText } from "./Review.styled";

export function Review({ data: { author, content } }: { data: ReviewType }) {
  return (
    <ReviewText>
      <Author>{author}</Author>
      <Quote>{content}</Quote>
    </ReviewText>
  );
}

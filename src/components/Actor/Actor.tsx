import { CastType } from "../../interfaces/cast";
import { ActorPhoto, ActorName, ActorProfile } from "./Actor.styled";

export function Actor({ data: { name, profile_path } }: { data: CastType }) {
  return (
    <ActorProfile>
      <ActorPhoto
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        alt={name}
      />
      <ActorName>{name}</ActorName>
    </ActorProfile>
  );
}

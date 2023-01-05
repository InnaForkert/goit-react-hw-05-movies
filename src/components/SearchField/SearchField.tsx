import { SearchInput } from "./SearchField.styled";

export function SearchField({
  onChange,
}: {
  onChange: (e: React.ChangeEvent) => void;
}) {
  return (
    <SearchInput
      type="text"
      onChange={(e) => onChange(e)}
      placeholder="Find a film"
    />
  );
}

import { SearchInput } from "./SearchField.styled";

export function SearchField({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}) {
  return (
    <SearchInput
      type="text"
      onChange={(e) => onChange(e)}
      placeholder="Find a film"
      value={value}
    />
  );
}

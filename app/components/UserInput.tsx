type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function UserInput({ value, onChange }: Props) {
  return (
    <input
      className="todoInput"
      type="text"
      placeholder="Enter item"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
interface Prop {
  onChange: (e: string) => void;
}
const Input = ({ onChange }: Prop) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Name skill"
    />
  );
};

export default Input;

type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function AddButton({
  onClick,
  loading,
}: Props) {
  return (
    <button
      className="addButton"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Adding..." : "Add Task"}
    </button>
  );
}
type Props = {
  items: any[];
  onDelete: (id: string) => void;
  onEdit: (item: any) => void;
};

export default function ItemList({
  items,
  onDelete,
  onEdit,
}: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>

          <span>{item.text}</span>

          <button onClick={() => onEdit(item)}>
            Edit
          </button>

          <button onClick={() => onDelete(item._id)}>
            Delete
          </button>

        </li>
      ))}
    </ul>
  );
}
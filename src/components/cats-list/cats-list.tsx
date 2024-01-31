import { Cat } from "../../types/cats";
import Card from "../card/card";

interface CatsListProps {
  cats: Cat[];
}

export default function CatsList({ cats }: CatsListProps): JSX.Element {
  return (
    <ul className="cats-list">
      {cats.map((cat) => (
        <li key={cat.id} className="cats-item">
          <Card cat={cat} />
        </li>
      ))}
    </ul>
  );
}

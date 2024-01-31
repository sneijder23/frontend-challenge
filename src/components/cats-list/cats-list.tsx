import { Cat } from "../../types/cats";
import Card from "../card/card";

interface CatsListProps {
  cats: Cat[];
}

export default function CatsList({ cats }: CatsListProps): JSX.Element {
  const listEmpty = cats.length === 0;

  return listEmpty ? (
    <>
      <h1>Котики спрятались ^_^</h1>
      <p>
        Поймай{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </p>
    </>
  ) : (
    <ul className="cats-list">
      {cats.map((cat) => (
        <li key={cat.id} className="cats-item">
          <Card cat={cat} />
        </li>
      ))}
    </ul>
  );
}

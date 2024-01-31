import Header from "../components/header/header";
import CatList from "../components/cats-list/cats-list";
import { getFavoriteCats } from "../store/slice/cats/selectors";
import { useAppSelector } from "../hooks/store";

export default function Favorite(): JSX.Element {
  const catsState = useAppSelector(getFavoriteCats);

  return (
    <div className="page">
      <Header />

      <main className="page__favorite">
        <section className="main__cats cats">
          <h1 className="visually-hidden">Favorite cats</h1>
          <CatList cats={catsState}/>
        </section>
      </main>
    </div>
  );
}

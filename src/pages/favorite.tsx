import Header from "../components/header/header";
import CatList from "../components/cats-list/cats-list";
import { mockCats } from "../mock";

export default function Favorite(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__favorite">
        <section className="main__cats cats">
          <h1 className="visually-hidden">Favorite cats</h1>
          <CatList cats={mockCats}/>
        </section>
      </main>
    </div>
  );
}

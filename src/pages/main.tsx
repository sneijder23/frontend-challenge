import CatList from "../components/cats-list/cats-list";
import Header from "../components/header/header";
import { mockCats } from "../mock";

export default function Main(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main main">
        <section className="main__cats cats">
          <h1 className="visually-hidden">Cats</h1>
          <CatList cats={mockCats} />
        </section>
      </main>
    </div>
  );
}

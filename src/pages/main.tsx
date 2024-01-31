import CatList from "../components/cats-list/cats-list";
import Header from "../components/header/header";
import Spinner from "../components/spinner/spinner";
import { useAppSelector } from "../hooks/store";
import { getCats, getCatsLoadingStatus } from "../store/slice/cats/selectors";

export default function Main(): JSX.Element {
  const catsState = useAppSelector(getCats);
  const isLoading = useAppSelector(getCatsLoadingStatus);

  return (
    <div className="page">
      <Header />

      <main className="page__main main">
        <section className="main__cats cats">
          <h1 className="visually-hidden">Cats</h1>
          {isLoading ? (
          <Spinner />
        ) : (
          <CatList cats={catsState} />)}
        </section>
      </main>
    </div>
  );
}

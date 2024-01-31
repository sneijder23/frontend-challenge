import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Favorite from "./pages/favorite";
import { AppRoute } from "./const";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Favorites} element={<Favorite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

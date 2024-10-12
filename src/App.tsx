import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CardListAddButton from "./components/test/CardListAddButton";
import CardPage from "./pages/Card";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="test" Component={Test}/>
        <Route path="/card/:id" Component={CardPage}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

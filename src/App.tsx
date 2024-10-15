import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CardListAddButton from "./components/test/CardListAddButton";
import CardPage from "./pages/Card";
import ScrollToTop from "./components/shared/ScrollToTop";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="test" Component={Test}/>
        <Route path="/card/:id" Component={CardPage}/>
        <Route path="/signup" Component={Signin}/>
        <Route path="/signin" Component={Signup}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CardListAddButton from "./components/test/CardListAddButton";
import CardPage from "./pages/Card";
import ScrollToTop from "./components/shared/ScrollToTop";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/shared/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import ApplyPage from "./pages/Apply";
import ApplyDone from "./pages/ApplyDone";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="test" Component={Test}/>
        <Route path="/card/:id" Component={CardPage}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/signin" Component={Signin}/>
        <Route path="/apply/:id" element = {(
          <PrivateRoute>
            <ApplyPage />
          </PrivateRoute>
        )} />
        <Route
          path="/apply/done"
          element={
            <PrivateRoute>
              <ApplyDone />
            </PrivateRoute>
          }
        />
      </Routes> 
    </BrowserRouter>
  );
}
export default App;

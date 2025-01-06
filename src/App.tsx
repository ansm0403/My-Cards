import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CardPage from "./pages/Card";
import ScrollToTop from "./components/shared/ScrollToTop";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/shared/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import ApplyPage from "./pages/Apply";
import ApplyDone from "./pages/ApplyDone";
import { Suspense } from "react";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
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
                <Suspense fallback = {<LoadingSpinner />}>
                  <ApplyPage />
                </Suspense>
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
    </HelmetProvider>
  );
}
export default App;

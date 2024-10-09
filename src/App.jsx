import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protectroute from "./component/auth/Protectroute";
import PersistentDrawerLeft from "./component/PersistentDrawerLeft"; // Import the drawer

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <PersistentDrawerLeft>
          <Routes>
            <Route element={<Protectroute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route
              path="/login"
              element={
                <Protectroute user={!user} redirect="/">
                  <Login />
                </Protectroute>
              }
            />
          </Routes>
        </PersistentDrawerLeft>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

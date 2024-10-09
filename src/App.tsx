import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Guard from "./pages/Guard";
import Contact from "./pages/Contact";
import Layout from "./components/sharedComponents/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Guard" element={<Guard />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
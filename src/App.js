import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Index from "./components/Index/Index";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
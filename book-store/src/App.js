import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
function App() {
  return <React.Fragment>

    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Add-product" element={<AddBook/>}/>
        <Route path="/All-books" element={<Books/>}/>
        <Route path="/About-us" element={<About/>}/>
        <Route path="/All-books/:id" element={<BookDetail/>}/>
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;

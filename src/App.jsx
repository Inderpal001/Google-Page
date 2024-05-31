import React from "react"
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

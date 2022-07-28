import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container } from "react-bootstrap";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Container>
        <Home/>
      </Container>
    </>
  );
}

export default App;

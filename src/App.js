import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container } from "react-bootstrap";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import styles from "../src/components/App.module.css";


function App() {
  return (
    <> 
      <div className={styles.background}>
        <Container>
          <Home/>
        </Container>
      </div>
    </>
  );
}

export default App;

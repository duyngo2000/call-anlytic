import styled from "styled-components"
import Home from "./pages/Home"
import {  Routes, Route } from "react-router-dom"
import Detail from "./pages/Detail"

const Container = styled.div`
  padding: 50px;
  background-color: #ccc;
  @media screen and (max-width: 576px) {
    padding: 5px;
  }
`



function App() {
  return (
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audioID:id" element = {<Detail />} />
        </Routes>      
    </Container>
  )
}

export default App

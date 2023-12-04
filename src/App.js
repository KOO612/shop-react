import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useState } from 'react';
import data from './data';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Card from './components/Card';
import Detail from './components/Detail';
import About from './components/About';
import Event from './components/Event';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Card shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404 error</div>} />
        <Route path="/about" element={<About />}>
          <Route path="/about/member" element={<div>about member</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="/event/one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="/event/two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

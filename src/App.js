import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';

import Navbarr from './components/Navbarr';
const Home = React.lazy(() => import('./components/Home'));
const User = React.lazy(() => import('./components/User'));
const About = React.lazy(() => import('./components/About'));

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL} >
            {/* <BrowserRouter> */}
                <Container>
                    <Row>
                        <Col>
                            <Navbarr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/user/:id" element={<User />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/" element={<Home />} />
                                </Routes>
                            </Suspense>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
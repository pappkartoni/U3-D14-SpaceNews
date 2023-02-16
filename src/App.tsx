import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from './components/DetailsPage';
import Navi from './components/Navi';

function App() {
    return (
        <BrowserRouter>
            <Navi></Navi>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/article/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

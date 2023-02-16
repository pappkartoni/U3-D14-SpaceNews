import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from './components/DetailsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/article/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

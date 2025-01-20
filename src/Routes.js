import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animacao from './components/CodeAnimation/CodeAnimation.jsx';
import Convite from './components/InvitationPage/InvitationPage.jsx';



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Animacao />} />
                <Route path="/convite" element={<Convite />} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
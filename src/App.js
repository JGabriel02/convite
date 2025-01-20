import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvitationPage from './components/InvitationPage/InvitationPage';
import AnimationPage from './components/CodeAnimation/CodeAnimation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationPage />} />
        <Route path="/convite" element={<InvitationPage />} />
      </Routes>
    </Router>
  );
};

export default App;

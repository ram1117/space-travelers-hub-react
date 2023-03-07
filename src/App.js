import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilePage from './components/ProfilePage';
import Navigation from './components/Navigation';
import MissionsPage from './components/missions/MissionsPage';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route index element={<Navigate to="profile" replace />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="missions" element={<MissionsPage />} />
    </Routes>
  </div>
);

export default App;

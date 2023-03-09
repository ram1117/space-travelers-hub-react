import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilePage from './components/profile/ProfilePage';
import Navigation from './components/Navigation';
import MissionsPage from './components/missions/MissionsPage';
import RocketsFalcon from './components/rockets/RocketsFalcon';
import store from './redux/store';
import { fetchRockets } from './redux/rockets/rocketsSlice';

const App = () => {
  store.dispatch(fetchRockets());
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route index element={<Navigate to="rockets" replace />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="rockets" element={<RocketsFalcon />} />
        <Route path="missions" element={<MissionsPage />} />
      </Routes>
    </div>
  );
};

export default App;

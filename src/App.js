import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilePage from './components/ProfilePage';
import Navigation from './components/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="profile" index element={<ProfilePage />} />
    </Routes>
  </div>
);

export default App;

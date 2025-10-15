import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import Dashboard from './components/dashboar
import GitHubCallback from './components/GitHubCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/github-callback" element={<GitHubCallback />} />
      </Routes>
    </Router>
  );
}

export default App;

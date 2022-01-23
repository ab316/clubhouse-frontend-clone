import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PlanLayout from './pages/layouts/PlanLayout';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
        </Routes>
      </PlanLayout>
    </Router>
  );
}

export default App;

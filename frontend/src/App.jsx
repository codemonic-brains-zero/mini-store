import Dashboard from "./pages/Dashboard";
import Billing_Section from "./pages/Billing_Section";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/billing" element={<Billing_Section />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

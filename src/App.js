import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Details from "./pages/details/Details";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cop-marketplace" element={<Main />} />
        <Route path="cop-marketplace/about" element={<About />} />
        <Route path="cop-marketplace/dashboard" element={<Dashboard />} />
        <Route path="cop-marketplace/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

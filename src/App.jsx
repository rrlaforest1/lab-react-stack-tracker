import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </>
  );
}

export default App;

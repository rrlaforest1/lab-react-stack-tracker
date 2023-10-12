import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import "./TechnologyPage.css";

function TechnologyPage({ technologies }) {
  const [searchParams] = useSearchParams();
  const originCompany = searchParams.get("q");
  const { slug } = useParams();
  const theTechnology = technologies.find(
    (technologie) => technologie.slug === slug
  );
  const navigate = useNavigate();
  return (
    <>
      <h1>Technoligy Profile</h1>

      <main className="techpage">
        <div className="tech">
          <div className="tech-image">
            <img src={theTechnology.image} alt={theTechnology.name} />
          </div>
          <div className="tech-info">
            <h2 className="tech-name">{theTechnology.name}</h2>
            <a className="tech-link" href={theTechnology.website}>
              About
            </a>
            <p className="tech-description">{theTechnology.description}</p>
          </div>
        </div>
        <button
          className="back"
          onClick={() => navigate("/company/" + originCompany)}
        >
          Go back
        </button>
      </main>
    </>
  );
}

export default TechnologyPage;

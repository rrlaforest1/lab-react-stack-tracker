import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./CompanyPage.css";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const theCompany = companies.find((company) => company.slug === companySlug);

  return (
    <>
      <h1>Company Profile</h1>

      <main className="companypage">
        <div className="company">
          <div className="company-image">
            <img src={theCompany.logo} alt={theCompany.name} />
          </div>
          <div className="company-info">
            <h2 className="company-name">{theCompany.name}</h2>
            <a className="company-link" href={theCompany.website}>
              About
            </a>
            <p className="company-description">{theCompany.description}</p>
          </div>
        </div>
        <ul className="company-techs">
          {theCompany.techStack.map((tech) => {
            return (
              <li key={tech.slug}>
                <Link
                  key={tech.slug}
                  to={`/tech/${tech.slug}?q=${companySlug}`}
                >
                  <p>
                    <img src={tech.image} alt={tech.name} />
                  </p>
                  <h4>{tech.name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default CompanyPage;

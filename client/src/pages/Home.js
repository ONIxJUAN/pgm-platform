import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Home({
  portfolio: dataPortfolio,
  blog: dataBlog,
  team: dataTeam,
  services: dataServices,
}) {
  useEffect(() => {
    document.title = "Graduaat Programmeren";
  }, []);
  return (
    <>
      <section className="top">
        <div className="top-left">
          <h1>Programmeren</h1>
          <p>
            Tijdens het Graduaat Programmeren leer je het zichtbare (front-end)
            en onzichtbare (backend) deel van web- en mobiele toepassingen
            ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult
            jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische
            kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital
            agencies werken en wat jouw rol hierbinnen zal zijn. Na deze
            opleiding kan je aan de slag als front-end developer, full-stack
            JavaScript developer, PHP developer, Web Designer + Coder of CMS
            Themer.
          </p>
        </div>
        <div className="top-right">
          <img
            src="images/pgm-philippe.webp"
            alt="programmeren door philippe"
          />
        </div>
      </section>
      <section className="portfolio">
        <h1>Portfolios</h1>
        <div className="portfolio--cards">
          <Card amount={3} type="portfolio" data={dataPortfolio} />
        </div>
      </section>
      <section className="blog">
        <h1>Blog</h1>
        <div className="blog--cards">
          <Card amount={3} type="blog" data={dataBlog} />
        </div>
      </section>
      <section className="team">
        <h1>Team</h1>
        <div className="team--cards">
          <Card amount={3} type="team" data={dataTeam} />
        </div>
      </section>
      <section className="services--cards">
        <h1>Services</h1>
        <div className="services">
          <Card amount={3} type="services" />
        </div>
      </section>
    </>
  );
}

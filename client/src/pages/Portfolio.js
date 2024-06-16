import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Portfolio({ portfolio, sortingHandler }) {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  let { dataPortfolio } = portfolio;
  const [sorting, setSorting] = sortingHandler;
  return (
    <>
      <div className="portfolio--filter">
        <button onClick={() => setSorting(null)}>All</button>
        <button onClick={() => setSorting("Computer Programming")}>
          Computer Programming
        </button>
        <button onClick={() => setSorting("Applied Information Technology")}>
          Applied Information Technology
        </button>
        <button onClick={() => setSorting("UI/UX Prototyping")}>
          UI/UX Prototyping
        </button>
        <button onClick={() => setSorting("Business & Communication")}>
          Business & Communication
        </button>
        <button onClick={() => setSorting("Workplace Learning @ Work")}>
          Workplace Learning @ Work
        </button>
        <button onClick={() => setSorting("Cloud Application Development")}>
          Cloud Application Development
        </button>
      </div>
      <div className="portfolios">
        <Card
          type={"portfolio"}
          amount={dataPortfolio.portfolios.length}
          data={dataPortfolio}
          sort={sorting}
        />
      </div>
    </>
  );
}

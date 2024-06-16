import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Search({ portfolio, blog }) {
  useEffect(() => {
    document.title = "Zoekresultaten";
  }, []);
  const search = useParams().search;
  const dataportfolio = portfolio.portfolios.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const dataBlog = blog.blogs.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(dataportfolio, dataBlog);
  return (
    <div className="search">
      <h1>Zoek resultaten voor: {search}</h1>
      {dataportfolio?.length > 0 && (
        <div>
          <h2>Portfolio</h2>
          <Card
            type={"portfolio"}
            amount={dataportfolio.length + 1}
            data={dataportfolio}
          />
        </div>
      )}
      {dataBlog?.length > 0 && (
        <div>
          <h2>Blog</h2>
          <Card type={"blog"} amount={dataBlog.length + 1} data={dataBlog} />
        </div>
      )}
    </div>
  );
}

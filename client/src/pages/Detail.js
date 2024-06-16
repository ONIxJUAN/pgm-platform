import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Detail({ portfolio, blog }) {
  let { dataPortfolio, setSorting } = portfolio;
  let { dataBlog } = blog;
  const type = useParams().type;
  const name = useParams().name;
  const title = useParams().title;
  useEffect(() => {
    if (type === "blog") {
      document.title = title;
    } else if (type === "portfolio") {
      document.title = title;
    }
  }, [type, title]);
  if (type === "team" || type === "services") {
    if (type === "team") {
      return <div>{name}</div>;
    } else if (type === "services") {
      return <div>{name}</div>;
    }
  } else if (type === "blog" || type === "portfolio") {
    if (type === "blog") {
      const blogItem = dataBlog.blogs.find((item) => {
        if (item.title.includes("?")) {
          return item.title === `${title}?`;
        } else {
          return item.title === title;
        }
      });
      dataBlog.blogs.find((item) => item.title === title);
      return (
        <div>
          <h1>{blogItem.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blogItem.html }}></div>
        </div>
      );
    } else if (type === "portfolio") {
      const portfolioItem = dataPortfolio.portfolios.find(
        (item) => item.title === title
      );
      return (
        <div className="portfolioItem">
          <h1>{portfolioItem.title}</h1>
          <div className="img">
            <img src={portfolioItem.img.url} alt={portfolioItem.title} />
          </div>
          <div className="listings">
            <div className="programmalijn">
              <p className="left">Programmalijn:</p>
              <div className="right">
                {portfolioItem.programmalijn.map((item) => (
                  <Link to={`/portfolios`} onClick={() => setSorting(item)}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="vak">
              <p className="left">Vak:</p>
              <p className="right">{portfolioItem.vak}</p>
            </div>
            {portfolioItem.periode ? (
              <div>
                <p className="left">Periode:</p>
                <p className="right">{portfolioItem.periode}</p>
              </div>
            ) : null}
            {portfolioItem.kernwoorden.length > 0 ? (
              <div>
                <p className="left">Kernwoorden</p>
                <p className="right">{portfolioItem.kernwoorden}</p>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>404 nice try</h1>
        <p>Pagina bestaat niet!</p>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

export default function Card({ type, amount, data, sort }) {
  if (type === "portfolio") {
    data = data?.portfolios ? data.portfolios : data;
  } else if (type === "blog") {
    data = data?.blogs ? data.blogs : data;
  } else if (type === "team") {
    data = data?.teams ? data.teams : data;
  } else if (type === "services") {
    data = [
      "Werken-voor-echte-klanten",
      "Werkplekleren",
      "Onderzoek",
      "DienstVerlening",
      "Workshop",
    ];
  }
  if (data?.length > amount) {
    data = data.slice(0, amount);
  }
  if (sort) {
    data = data.filter((item) => item.programmalijn.includes(sort));
  }

  if (type === "portfolio") {
    return (
      <>
        {data &&
          data.map((item) => {
            return (
              <Link to={`/portfolio/${item.title}`} className="card">
                <h2>{item?.title}</h2>
                <img
                  className="card__img"
                  src={item?.img?.url}
                  alt={item?.title}
                />
              </Link>
            );
          })}
      </>
    );
  } else if (type === "blog") {
    return (
      <>
        {data &&
          data.map((item) => {
            return (
              <Link to={`/blog/${item.title}`} className="card">
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
              </Link>
            );
          })}
      </>
    );
  } else if (type === "team") {
    return (
      <>
        {data &&
          data.map((item) => {
            return (
              <div className="card">
                <h2>{item?.name}</h2>
                <img
                  className="card__img"
                  src={item?.img?.url}
                  alt={item?.name}
                />
                {item?.vak.map((vak) => (
                  <p>{vak}</p>
                ))}
              </div>
            );
          })}
      </>
    );
  } else if (type === "services") {
    return (
      <>
        {data &&
          data.map((item) => {
            return (
              <Link to={`/services?${item}`}>
                <h2>{item}</h2>
              </Link>
            );
          })}
      </>
    );
  }
}

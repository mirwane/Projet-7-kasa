import React from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";

function Cards({ data }) {
  return (
    <>
      {data.map((lot) => (
        <div className="card_Preview" key={lot.id}>
          <Link to={`/kasa/lots/${lot.id}`} className="card_Link">
            <img src={lot.cover} alt={lot.title} className="card_Cover" />
            <h2 className="card_Title">{lot.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Cards;

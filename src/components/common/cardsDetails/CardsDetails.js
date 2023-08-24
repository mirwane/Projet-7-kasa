import React, { useEffect } from "react";
import lotsData from "../../../data/lotsData.json";
import "./CardsDetails.scss";
import renderStars from "../renderStars/renderStars";
import Carousel from "../carousel/Carousel";
import Collapse from "../collapse/Collapse";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function CardsDetails() {
  const { id } = useParams();
  const lot = lotsData.find((lot) => lot.id === id);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    if (!lot) {
      history(`/kasa/notfound?from=${location.pathname}`);
    }
  }, [history, location.pathname, lot]);

  if (lot) {
    return (
      <article className="card_details">
        <Carousel images={lot.pictures} />
        <section className="title_location_rating">
          <div className="title_location">
            <h2 className="lots_title">{lot.title}</h2>
            <div className="lots-location">{lot.location}</div>
          </div>
          <div className="host_rating">
            <div className="lots_host">
              <p className="host_name">{lot.host.name}</p>
              <img
                className="host-picture"
                src={lot.host.picture}
                alt={lot.host.name}
              />
            </div>
            <div className="rating"> {renderStars(lot.rating)}</div>
          </div>
        </section>
        <div className="lots_tags">
          {lot.tags.map((tags) => (
            <button key={tags}>{tags}</button>
          ))}
        </div>
        <section className="homeCollapse">
          <div className="lots_description">
            <Collapse title="Description">
              <p>{lot.description}</p>
            </Collapse>
          </div>
          <div className="lots_equipements">
            <Collapse title="Equipements">
              {lot.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </Collapse>
          </div>
        </section>
      </article>
    );
  }
}
export default CardsDetails;

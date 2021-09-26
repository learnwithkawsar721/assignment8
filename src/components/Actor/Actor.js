import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Actor.css";
const Actor = (props) => {
  const { id, name, age, famous_as, dimant, birthplace, img } = props.actor;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card h-100">
        <div className="img_area">
          <img className="actor_img" src={img} alt="" />
        </div>
        <div className="card-body">
          <h6 className="card-title text-center"> {name} </h6>
          <p className="card-text mb-0">
            Famoun As : <b>{famous_as}</b>
          </p>
          <p className="card-text mb-0">
            Age : <b>{age}</b>
          </p>
          <p className="card-text mb-0">Country : {birthplace}</p>
          <p className="card-text">
            Dimant : <b>{dimant}</b>
          </p>
          <button
            onClick={() => props.actorHendel(id)}
            className="btn btn-sm btn-success actor_btn"
          >
            <FontAwesomeIcon icon={faClipboardCheck} /> Select Actor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actor;

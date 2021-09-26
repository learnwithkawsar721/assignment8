import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ActorShow = (props) => {
  const { name, img } = props.carts;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid cart_img rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between">
            <p className="card-title m-0"> {name}</p>
            <button
              onClick={() => props.removeActor(props.index)}
              className="btn btn-sm btn-danger"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorShow;

import React from "react";
import ActorShow from "./ActorShow";
import "./Cart.css";
const Cart = (props) => {
  const { carts, removeActor } = props;
  let totalCost = 0;
  if (carts.length) {
    totalCost += carts.reduce(
      (previus, current) => previus + current.dimant,
      0
    );
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          Selected Actors and Model:{props.carts.length}
        </h4>
        <h5 className="card-title">Total Cost : {totalCost} Tk </h5>
        {carts.map((cart,index) => (
          <ActorShow
            carts={cart}
            index={index}
            key={Math.random()}
            removeActor={removeActor}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

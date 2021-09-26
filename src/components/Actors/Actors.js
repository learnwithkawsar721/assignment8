import React, { useEffect, useState } from "react";
import Actor from "../Actor/Actor";
import Cart from "../Cart/Cart";

const Actors = () => {
  const [actors, setActors] = useState([]); //State manage
  const [carts, setCarts] = useState([]); // cart State
  /* Load data and show setActors state  */
  useEffect(() => {
    fetch("./fackData.JSON")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  const actorHendel = (id) => {
    const findData = actors.find((actor) => actor.id === id);
    const newCart = [...carts, findData];
    const chackCart = carts.find((cart) => cart.id === id);
    if (!chackCart) {
      setCarts(newCart);
    }
  };
/* 
  * Remove Cart Item 
*/
  const removeActor = (index) => {
    let oldItem = [...carts];
    oldItem.splice(index, 1);
    setCarts(oldItem);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="row g-3">
            {actors.map((actor) => (
              <Actor key={actor.id} actor={actor} actorHendel={actorHendel} />
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <Cart carts={carts} removeActor={removeActor} />
        </div>
      </div>
    </div>
  );
};

export default Actors;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const List = (props) => {
  console.log(props.data);
  return props.data.map((card) => {
    return (
      <div key={card.id} className='col-lg-4 mb-4'>
        <Card titolo={card.titolo} descrizione={card.descrizione} />
      </div>
    );
  });
};

const Card = ({ titolo, descrizione }) => {
  return (
    <div className='card shadow border-0'>
      <div className='card-body'>
        <div className='card-title'>
          <h5>{titolo}</h5>
        </div>
        <div className='card-text'>
          <p>{descrizione}</p>
        </div>
      </div>
    </div>
  );
};

export default List;

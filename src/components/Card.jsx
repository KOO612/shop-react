import React from 'react';
import Item from './Item';

const Card = (props) => {
  return (
    <div>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <Item shoes={props.shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

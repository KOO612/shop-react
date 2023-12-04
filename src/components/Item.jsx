import React from 'react';

const Item = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg
`}
        width="80%"
        alt={`신발${props.i + 1}`}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
};

export default Item;

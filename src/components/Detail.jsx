import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;
let Box = styled.div`
  background: grey;
  padding: 20px;
`;

const Detail = (props) => {
  let { id } = useParams();
  let findItem = props.shoes.find((x) => {
    return x.id == id;
  });
  return (
    <div className="container">
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findItem.id + 1}.jpg`} width="80%" alt="신발" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

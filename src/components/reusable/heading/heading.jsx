import React from 'react';

const  Heading = ({value, weight, fontFamily, fontSize, color}) => {

  return <h2 style = {{fontWeight : weight, fontSize, color, fontFamily}}>{value}</h2>;
};

export default Heading;

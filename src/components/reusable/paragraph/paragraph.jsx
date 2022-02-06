import React from 'react';

const Paragraph = ({
      value, 
      weight, 
      fontFamily, 
      fontSize, 
      color, 
      textAlign, 
      top, 
      position, 
      width,
      lineHeight
  }) => {
            return <p style = {{fontWeight : weight, fontSize, color, fontFamily, textAlign, top, position, width, lineHeight}}>
                    {value}
                  </p>;
};

export default Paragraph;

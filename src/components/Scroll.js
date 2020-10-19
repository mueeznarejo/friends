import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{ 
        overflowY: 'scroll', 
        height: '500px', 
        borderWidth: '.25rem', 
        borderRadius: '.5rem', 
        boxShadow: "4px 4px 8px 0 rgba( 0, 0, 0, .2 )",
        padding: '1rem',
        margin: '.5rem' 
    }}>
      {props.children}
    </div>
  );
}

export default Scroll;

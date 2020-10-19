import React from 'react';

const Card = ({name, email, id}) => {
  return(
    <div className='tc bg-near-white dib ma2 pa3 grow shadow-5 br3 bw2'>
      <img src={`https://robohash.org/${id}?size=200x200&&set=set5`} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
} 

export default Card;

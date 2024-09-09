import React from 'react';

function Tour({
  id,
  name,
  info,
  image,
  price,
  showMore,
  setShowMore,
  data,
  setData,
}) {
  const deletePost = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>
        {showMore ? info : `${info.slice(0, 200)}`}{' '}
        <button onClick={() => setShowMore(!showMore)} className="read_more">
          {!showMore ? 'read more' : 'show less'}
        </button>
      </p>

      <button onClick={() => deletePost(id)} className="btn">
        Not Interested
      </button>
      <p className="price">${price}</p>
    </div>
  );
}

export default Tour;

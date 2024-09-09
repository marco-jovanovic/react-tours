import React from 'react';
import axios from 'axios';

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
  const toggleText = (id) => {
    return data.map((item) => {
      if (item.id === id) {
        setShowMore(!showMore);
      }
    });
  };

  const deletePost = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>
        {info.slice(0, 200) + '...'}
        <span onClick={() => toggleText(id)} className="read_more">
          {!showMore ? 'Read More' : ''}
        </span>
        {showMore && id === id ? info.slice(200) : ''}{' '}
        <span onClick={() => toggleText(id)} className="read_more">
          {showMore ? 'Show less' : ''}
        </span>
      </p>

      <button onClick={() => deletePost(id)} className="btn">
        Not Interested
      </button>
      <p className="price">${price}</p>
    </div>
  );
}

export default Tour;

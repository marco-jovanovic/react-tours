import React from 'react';

import Tour from './Tour';
function Tours({ data, showMore, setShowMore, setData }) {
  return (
    <>
      <div className="container">
        {data.map((tour) => {
          return (
            <Tour
              key={tour.id}
              id={tour.id}
              name={tour.name}
              info={tour.info}
              image={tour.image}
              price={tour.price}
              showMore={showMore}
              setShowMore={setShowMore}
              data={data}
              setData={setData}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tours;

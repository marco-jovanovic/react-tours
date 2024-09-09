import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import axios from 'axios';
import Loading from './Loading';

function App() {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  async function getTours() {
    try {
      const res = await axios.get(
        'https://www.course-api.com/react-tours-project'
      );
      setShowLoading(true);
      setData(res.data);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
      if (error) {
        setData([]);
        setShowLoading(false);
        console.log(error);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getTours();
    }, 1000);
  }, []);

  return (
    <>
      {data.length !== 0 && <h2 className="text-center">Our Tours</h2>}

      {data.length === 0 && !showLoading && (
        <div className="btn-center">
          <button className="btn btn-title" onClick={() => getTours()}>
            Refresh
          </button>
        </div>
      )}
      {data.length === 0 && showLoading && (
        <div>
          <Loading />
        </div>
      )}
      <Tours
        data={data}
        showMore={showMore}
        setShowMore={setShowMore}
        setData={setData}
      />
    </>
  );
}

export default App;

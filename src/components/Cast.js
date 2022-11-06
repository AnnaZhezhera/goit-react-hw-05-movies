import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { imageBaseUrl, getCredits } from '../api';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState({});

  useEffect(() => {
    const getCreditsByMovieId = async movieId => {
      setCredits(await getCredits(movieId));
    };
    getCreditsByMovieId(id).catch(console.error);
  }, [id]);
  return (
    credits.id && (
      <section>
        <div>
          {credits.cast.map(cast => (
            <div key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? imageBaseUrl + 'w200' + cast.profile_path
                    : 'https://via.placeholder.com/100/C0C0C0/FFFFFF?text="N0 photo"'
                }
                alt={cast.name}
                style={{ width: '100px' }}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default Cast;

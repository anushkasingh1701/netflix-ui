import React from 'react';
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  // Log the received movies prop
  // console.log('Received movies in Slider:', movies);

  // Function to safely slice the movies array
  const getMoviesFromRange = (from, to) => {
    if (!Array.isArray(movies)) {
      console.error('movies is not an array:', movies);
      return [];
    }
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Popular on Netflix" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
}

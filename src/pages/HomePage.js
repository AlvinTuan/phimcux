import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;

import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=0f2828258a4259490e4802ec8bceef93",
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex item-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            ADasdjas
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            ADasdjas
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            ADasdjas
          </span>
        </div>
        <button className="py-3 px-6 bg-primary text-white rounded-lg font-medium">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Banner;

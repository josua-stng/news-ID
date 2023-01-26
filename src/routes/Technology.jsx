import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [newsId, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetch(`
        https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=${
          import.meta.env.VITE_SOME_KEY
        }`);
    const response = await data.json();
    setNews(response.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <h1 className="text-center my-10 text-2xl italic">Loading...</h1>
      ) : (
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-4">
            {newsId.map((news, index) => {
              return (
                <a href={`${news.url}`} target="_blank" key={index}>
                  <div className="flex flex-col items-center justify-center mt-[30px]">
                    <img
                      src={`${news.urlToImage}`}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="lg:flex justify-start mt-2 w-full items-center ">
                      <p className="uppercase bg-green-400 text-slate-600 text-bold text-sm p-[3px]">
                        {news.author}
                      </p>
                      <p className="ml-3 text-sm font-light">
                        {new Date(news.publishedAt).toDateString()}
                      </p>
                    </div>
                    <p className="overflow-hidden h-[50px] mt-2 font-bold">
                      {news.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;

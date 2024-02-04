import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Tabsection = ({ loadedData }) => {
  return (
    <div className="mx-auto">
      <h1 className="text-4xl text-center font-extrabold mt-20 mb-20">
        Tourism and Travel Guide
      </h1>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <section class="bg-white">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                  Payments tool for software companies
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/gId0G6_x7hM?si=Qz_aXDeTpm-9VN5w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3  lg:gap-28 lg:ml-10">
            <Helmet>
              <title>TravelHunt | Services</title>
            </Helmet>
            {loadedData?.slice(0, 3).map((result) => {
              return (
                <div
                  key={result._id}
                  className="card card-compact w-96 bg-base-100 shadow-xl h-[450px]"
                >
                  <figure>
                    <img
                      className="h-60 w-96"
                      src={result.service_image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{result.Title}</h2>
                    <p>{result.category}</p>
                    <p className="font-bold"> Price : {result.price}</p>
                    <div className="flex items-center gap-x-2">
                      <div>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={result.photourl}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{result.name}</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <Link to={`/packagedetails/${result._id}`}>
                        <button className="btn btn-primary">
                          View details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-full mx-auto">
            <Link to={'allpackages'}>
              <button className="btn btn-secondary">View All</button>
            </Link>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;

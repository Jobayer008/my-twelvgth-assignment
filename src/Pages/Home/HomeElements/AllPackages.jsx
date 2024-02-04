import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AllPackages = () => {

    const loadedData = useLoaderData()

    return (
        <div>
            <h1 className='mt-20 mb-20 font-bold text-3xl text-center'>All Packages</h1>
                      <div className="grid grid-cols-3  lg:gap-28 lg:ml-10">
            <Helmet>
              <title>TrailTango | All Packages</title>
            </Helmet>
            {loadedData?.map((result) => {
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
        </div>
    );
};

export default AllPackages;






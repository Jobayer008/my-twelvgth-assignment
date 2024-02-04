import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import useAxiosSecure from "../../../Providers/useAxiosSecure";


const AddPackage = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const email = form.Email.value;
    const Title = form.Title.value;
    const service_image = form.serviceImage.value;
    const price = form.Price.value;
    const service_area = form.serviceArea.value;
    const category = form.Category.value;
    const description = form.Description.value;
    const photourl = form.PhotoURL.value;
    const aboutTheTour = form.aboutTheTour.value;
    const tourPlan1 = form.tourPlan1.value;
    const tourPlan2 = form.tourPlan2.value;
    const tourPlan3 = form.tourPlan3.value;

    const serviceData = {
      name,
      email,
      Title,
      service_image,
      price,
      service_area,
      category,
      description,
      photourl,
      aboutTheTour,
      tourPlan1,
      tourPlan2,
      tourPlan3
    };
    console.log(serviceData);

    // fetch("http://localhost:5000/tourDetails", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(serviceData),
    // })
    axiosSecure.post("/tourDetails",serviceData)
      // .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your service has been added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };



    return (
        <div>
        <Helmet>
          <title>TrailTrango | Add Services</title>
        </Helmet>
        <h1 className='mt-20 mb-20 font-bold text-3xl text-center'>Add a Service</h1>
        <form onSubmit={handleAddServices} action="">
          <div className="flex gap-10">
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Your Name
              </label>
              <input
                disabled
                name="Name"
                defaultValue={user?.displayName}
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Your Email
              </label>
              <input
                disabled
                name="Email"
                defaultValue={user?.email}
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Title
              </label>
              <input
                name="Title"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Service image
              </label>
              <input
                name="serviceImage"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Price
              </label>
              <input
                name="Price"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Service Area
              </label>
              <input
                name="serviceArea"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Category
              </label>
              <input
                name="Category"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Description
              </label>
              <input
                name="Description"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Provider image
              </label>
              <input
                disabled
                name="PhotoURL"
                defaultValue={user?.photoURL}
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                About The Tour
              </label>
              <input
                name="aboutTheTour"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
  
          </div>
          <div className="flex gap-10">
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Tour Plan 1
              </label>
              <input
                name="tourPlan1"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Tour Plan 2
              </label>
              <input
                
                name="tourPlan2"
                
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6 w-full">
              <label for="base-input" class="block mb-2 text-sm font-medium  ">
                Tour Plan 3
              </label>
              <input
                name="tourPlan3"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
  
          </div>
  
          <button type="submit" className="btn btn-secondary">
            Add Service
          </button>
        </form>
      </div>
    );
};

export default AddPackage;
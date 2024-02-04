import React from 'react';
import { GiSchoolBag } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const TourType = () => {
    return (
<>
{/* <div className='flex items-center justify-between'>
<div className='flex-1 h-96 w-1/4'>
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    <div className='flex-1'>
hello
    </div>
    <div className='flex-1'>
hello
    </div>
</div> */}
<div class="container mx-auto my-8">
  <h2 class="text-3xl font-semibold mb-6">Explore Destinations</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <img src="category1.jpg" alt="Category 1" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Category 1</h3>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="mt-4 inline-block text-blue-500 hover:text-blue-700">Explore</a>
      </div>
    </div>

    
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <img src="category2.jpg" alt="Category 2" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Category 2</h3>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="mt-4 inline-block text-blue-500 hover:text-blue-700">Explore</a>
      </div>
    </div>

    
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <img src="category3.jpg" alt="Category 3" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Category 3</h3>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="mt-4 inline-block text-blue-500 hover:text-blue-700">Explore</a>
      </div>
    </div>

    
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <img src="category4.jpg" alt="Category 4" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Category 4</h3>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="mt-4 inline-block text-blue-500 hover:text-blue-700">Explore</a>
      </div>
    </div>
  </div>
</div>

</>
    );
};

export default TourType;
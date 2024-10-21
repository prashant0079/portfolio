import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "The DAO platform Prashant built made community governance effortless and transparent"
  },
  {
    avatar: AVTR2,
    name: 'Jason',
    review: "Our NFT marketplace was brought to life thanks to Prashant's expertise in smart contracts"
  },
  {
    avatar: AVTR3,
    name: 'Alex Barker',
    review: "Built an incredible RWA tokenization system that enhanced our asset liquidity and security."
  },
  {
    avatar: AVTR4,
    name: 'Amy John',
    review: "Prashant crafted a DApp for us that was both intuitive and highly secure—amazing work!"
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='text_center1'>
        <h5>Review From clients</h5>
      </div>
      <div className='text_center'>
        <h2>Testimonials</h2>
      </div>
      <Swiper modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} className="container testimonials__container"  // install Swiper modules
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>)
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
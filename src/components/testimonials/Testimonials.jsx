import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/client1.jpg' 
import AVTR2 from '../../assets/client2.jpg' 
import AVTR3 from '../../assets/client3.jpg' 
import AVTR4 from '../../assets/client4.jpg' 
// import Swiper core and required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Ksenia Ukrainka',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugit perferendis. Laborum quia quis ipsam aspernatur eveniet sapiente tempore consequatur odio, ipsum cumque saepe obcaecati velit ducimus officia quo sed.'
    },
    {
      avatar: AVTR2,
      name: 'Artem Voron',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugit perferendis. Laborum quia quis ipsam aspernatur eveniet sapiente tempore consequatur odio, ipsum cumque saepe obcaecati velit ducimus officia quo sed.'
    },
    {
      avatar: AVTR3,
      name: 'Anna Zodiak',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugit perferendis. Laborum quia quis ipsam aspernatur eveniet sapiente tempore consequatur odio, ipsum cumque saepe obcaecati velit ducimus officia quo sed.'
    },
    {
      avatar: AVTR4,
      name: 'Peter Lago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugit perferendis. Laborum quia quis ipsam aspernatur eveniet sapiente tempore consequatur odio, ipsum cumque saepe obcaecati velit ducimus officia quo sed.'
    }
  ]

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
                <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar Of Client" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
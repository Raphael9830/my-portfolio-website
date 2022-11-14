import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar-1.png'
import AVTR2 from '../../assets/avatar-2.png'
import AVTR3 from '../../assets/avatar-3.png'
import AVTR4 from '../../assets/avatar-4.png'
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Jojo Abbiw",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque laboriosam fugiat repellendus pariatur! Officia, cumque voluptate. Voluptatum iure sequi est asperiores error quas repellendus! Dignissimos accusantium amet sequi ab"
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Ama Gyaa Brobbey",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque laboriosam fugiat repellendus pariatur! Officia, cumque voluptate. Voluptatum iure sequi est asperiores error quas repellendus! Dignissimos accusantium amet sequi ab"
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Abdul Suraj",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque laboriosam fugiat repellendus pariatur! Officia, cumque voluptate. Voluptatum iure sequi est asperiores error quas repellendus! Dignissimos accusantium amet sequi ab"
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Alex Amankwaa",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque laboriosam fugiat repellendus pariatur! Officia, cumque voluptate. Voluptatum iure sequi est asperiores error quas repellendus! Dignissimos accusantium amet sequi ab"
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What Clients Say</h5>
      <h2>Testimonials</h2>
                          
      <Swiper className="container testimonials__container mySwiper"
        spaceBetween={30}
        pagination={{clickable:true}} 
        modules={[Pagination]}>
        {
          data.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="client" />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
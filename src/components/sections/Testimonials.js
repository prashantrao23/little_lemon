import TestimonialCard from './TestimonialCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Testimonials() {

    const testimonials = [
        {
            name: "Micheal Caldwell",
            description: "This is the best Mediterranean food that I've ever had!"
        },
        {
            name: "Alan Chen",
            description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
        },
        {
            name: "Casey Lau",
            description: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."
        },
        {
            name: "John Rosenblum",
            description: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
        },
        {
            name: "Jim Reynor",
            description: "The food here really refreshed me after a late night shift at the local supply depot."
        },
        {
            name: "Brian Dean",
            description: "I came to Little Lemon after a 5-hour flight from the East Coast. The food here tasted so delicious after the trip here."
        },
        {
            name: "Tyler Tohmine",
            description: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago."
        },
        {
            name: "Jack Hu",
            description: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"
        },
    ];

    const breakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1

        },
        500: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1
        },
        
    }

    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">

                <Swiper breakpoints={breakpoints} loop={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: true, }} navigation={true} className='mySwiper' >

                    {testimonials.map((testimonial, index) => (

                        <SwiperSlide key={index}>
                            <TestimonialCard name={testimonial.name} description={testimonial.description} />
                        </SwiperSlide>
                    ))}


                </Swiper>
               
            </section>

        </section>
    );
}
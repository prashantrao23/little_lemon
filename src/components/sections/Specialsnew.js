import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import GreekSalad from '../../assets/food/greek-salad.webp';
import Bruschetta from '../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../assets/food/lemon-dessert.webp';
import Specialcards from './Specialcards';

const Specialsnew = () => {

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

    const specialcards = [
        {
            cardId: "cardId_1",
            image: GreekSalad,
            name: "Greek Salad",
            price: "$12.99",
            description: "Feta Cheese, tomato, lettuce"
        },
        {
            cardId: "cardId_2",
            image: Bruschetta,
            name: "Bruschetta",
            price: "$16.99",
            description: "Bread, mango, green onions"
        },
        {
            cardId: "cardId_3",
            image: LemonDessert,
            name: "Lemon Dessert",
            price: "$8.50",
            description: "Lemon bread, vanilla Icing"
        },

    ];

    return (
        <section className='specials'>
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>
            <section className="newspecials-cards">
                <Swiper breakpoints={breakpoints} loop={true} modules={[Navigation, Pagination, Autoplay]} autoplay={{delay: 2500,disableOnInteraction: false,}} pagination={true} navigation={true} className='mySwiper' >

                    {specialcards.map((specialcard, index) => (

                        <SwiperSlide key={index}>
                            <Specialcards id={specialcard.cardId}
                                image={specialcard.image}
                                name={specialcard.name}
                                price={specialcard.price}
                                description={specialcard.description} />
                        </SwiperSlide>
                    ))}



                </Swiper>
            </section>
        </section>
    )
}

export default Specialsnew
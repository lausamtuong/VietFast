import React from 'react'
import './news.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
const News = () => {
    window.scrollTo(0,0)
  return (
    <div className='news' >
        <div className="news__header">
            <div className="hot__news">
                <NewsCard 
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                />
            </div>
            <div className="related__news">
                <div className="label">RELATED</div>
                <div className="item">
                    <RelatedCard
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                />
                </div>
                <div className="item">
                    <RelatedCard
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                />
                </div>
                <div className="item">
                    <RelatedCard
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                />
                </div>
                <div className="item">
                    <RelatedCard
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                />
                </div>

            </div>
        </div>
        <div className="news__future">
            <div className="label">Feature News</div>
            <div className="content">
                <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView='auto'
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay:3000}}
                >
                <SwiperSlide><NewsCard 
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                /></SwiperSlide>
                <SwiperSlide><NewsCard 
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                /></SwiperSlide>
                <SwiperSlide><NewsCard 
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                /></SwiperSlide>
                <SwiperSlide><NewsCard 
                    topic="Technology"
                    date = 'March 26, 2022'
                    title = "Japan’s virus success has puzzled the world. Is its luck running out?"
                /></SwiperSlide>
                </Swiper>                
            </div>
            
        </div>

    </div>
  )
}

const NewsCard = (props) => {
    return (
        <div className="news__card">
            <div className="image">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="text">
                <div className="timestamp">
                    <span>{props.topic} / {props.date}</span>
                </div>
                <div className="title">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

const RelatedCard = (props) => {
    return (
        <div className="related__card">
            <div className="image">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="text">
                <div className="timestamp">
                    <span><span style={{color:"#1091ff"}}>{props.topic}</span> / {props.date}</span>
                </div>
                <div className="title">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default News

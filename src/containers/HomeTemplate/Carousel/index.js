import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Carousel = props => {
    const data = props.data
    const timeOut = props.timeOut ? props.timeOut : 3000
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, data])


    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut)
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])


    return (
        <div className='slider'>
            <div className="slider-item">
                {
                    data.map((item, index) => (
                        <CarouselItem key={index} item={item} active={index === activeSlide} />
                    ))
                }

                {
                    props.control ? (
                        <div className="slider-item__control">
                            <div className="slider-item__control__item" onClick={prevSlide}>
                                <ChevronLeft className='icon left' />
                            </div>
                            <div className="slider-item__control__item" onClick={nextSlide}>
                                <ChevronRight className='icon right' />
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const CarouselItem = props => (
    <div className={`slider-item__image ${props.active ? 'active' : ''}`}>
        <Link path='/'>
            <img src={props.item.image} alt={props.item.name} />
        </Link>
    </div>

)

export default Carousel

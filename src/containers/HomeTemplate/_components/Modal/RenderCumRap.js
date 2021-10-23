import React from 'react'
import './modal.css'
import ShowTimes from './ShowTimes'

const RenderCumRap = ({ cumRap }) => {
    return (
        <div>
            {cumRap.cumRapChieu.map((rap, index) => (
                <div className='cumrap' key={index}>
                    <div className='cumrap-info'>
                        <img src={rap.hinhAnh} alt="" className='cumrap-img' />
                        <div className="cumrap-text">
                            <p>{rap.tenCumRap}</p>
                            <p>{rap.diaChi.length > 80 ? rap.diaChi.slice(0, 50) + '....' : rap.diaChi}</p>
                        </div>
                    </div>
                    <ShowTimes rap={rap} />
                </div>
            ))}
        </div>
    )
}


export default RenderCumRap

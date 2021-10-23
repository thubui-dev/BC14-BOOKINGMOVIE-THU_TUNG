import React from 'react'
import moment from 'moment'
import './modal.css'
import { Link } from 'react-router-dom'
import ROUTES from '../../../../routes'


const ShowTimes = ({ rap, movie }) => {
    return (
        <div className='showtimes row'>
            {rap.lichChieuPhim.slice(0, 6).map((lichChieu) => (
                <button
                    className='showtimes-btn col-3'
                    key={lichChieu.maLichChieu}
                >
                    <Link to={`${ROUTES.home}${ROUTES.bookingTicket}`}>
                        {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm A")}
                    </Link>
                </button>
            ))}
        </div>
    )
}

export default ShowTimes

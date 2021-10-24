import React from 'react'
import moment from 'moment'
import './modal.css'
import { Link } from 'react-router-dom'
import ROUTES from '../../../../routes'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const ShowTimes = ({ rap }) => {
    const history = useHistory()
    const { data } = useSelector((state) => state.loginReducer)

    return (
        <div className='showtimes row'>
            {rap.lichChieuPhim.slice(0, 6).map((lichChieu) => {
                return (
                    <button
                        className='showtimes-btn col-3'
                        key={lichChieu.maLichChieu}
                        onClick={() => {
                            if (data) {
                                history.push(
                                    `${ROUTES.home}${ROUTES.bookingTicket}/${lichChieu.maLichChieu}`
                                );
                            } else {
                                history.push('/home/login')
                            }
                        }}
                    >
                        <Link to={`${ROUTES.home}${ROUTES.bookingTicket}/${lichChieu.maLichChieu}`}>
                            {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm A")}
                        </Link>
                    </button>
                )
            })}
        </div>
    )
}

export default ShowTimes

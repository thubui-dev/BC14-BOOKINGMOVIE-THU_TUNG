import React, { Fragment, useEffect } from 'react'
import _ from "lodash";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import './booking.css'
import { actBookTickets, actFetchBookingMovie, actStatusBooking, addSeatSelectedAction } from './Modules/actions'
import Loader from '../../../component/Loader'
import moment from 'moment'
import ModalSuccess from '../_components/Modal/ModalSuccess';


const Checkout = (props) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const { loading,
        listTicketRoom,
        listSeatCurrentlySelected,
        bookingSuccess
    } = useSelector((state) => state.BookingMoveReducer)
    const { data } = useSelector((state) => state.loginReducer)

    useEffect(() => {
        if (!data) {
            history.push('/home')
        }
        const fetchData = () => {
            dispatch(actFetchBookingMovie(id))
        }
        fetchData(id)
    }, [dispatch, id, history, data])

    const handleBookTicket = () => {
        if (listSeatCurrentlySelected?.length) {
            const infoTiket = {}
            infoTiket.maLichChieu = id;
            infoTiket.danhSachVe = listSeatCurrentlySelected
            console.log(infoTiket)
            dispatch(actBookTickets(infoTiket))
        }
    }
    const handleCheckoutSuccess = () => {
        dispatch(actStatusBooking(false));
        props.history.push("/home");
    };

    const renderListSeat = () => {
        return listTicketRoom.danhSachGhe?.map((ghe, index) => {
            const classVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            const classOrder = ghe.taiKhoanNguoiDat ? 'gheDaDuocDat' : ''
            const indexSelect = listSeatCurrentlySelected?.findIndex((seatCurren) => seatCurren.maGhe === ghe.maGhe);
            const classSelecting = indexSelect !== -1 ? "gheDangChon" : "";

            return (
                <Fragment key={ghe.maGhe}>
                    <div
                        unselectable="on"
                        onMouseDown={() => false}
                        key={ghe.maGhe}
                        className={`ghe ${classVip} ${classOrder} ${classSelecting}`}
                        onClick={() => {
                            if (!classOrder) {
                                dispatch(addSeatSelectedAction(ghe))
                            }
                        }}
                    >
                        {ghe.tenGhe}
                    </div>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            )
        })
    }
    if (loading) return <Loader />
    return (
        <>
            <div className="checkout">
                <div className='container'>
                    <div className="row">
                        <div className="col-8 checkout-left">
                            <div className="checkout-left-title">
                                <h1>BOOKING ONLINE</h1>
                            </div>
                            <img
                                className="mx-auto"
                                src="https://tix.vn/app/assets/img/icons/screen.png"
                                alt=""
                            />
                            <div className='checkout-classList'>
                                {renderListSeat()}
                            </div>
                            <div className='checkout-class'>
                                <div className="checkout-class-item">
                                    <div className="ghe ghe-guide"></div>
                                    <p>Ghế thường</p>
                                </div>
                                <div className="checkout-class-item">
                                    <div className="ghe ghe-guide gheVip"></div>
                                    <p>Ghế Vip</p>
                                </div>
                                <div className="checkout-class-item">
                                    <div className="ghe ghe-guide gheDangChon"></div>
                                    <p>Ghế đang chọn</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 checkout-right">
                            <div className="checkout-right-movie">
                                <img src={listTicketRoom?.thongTinPhim?.hinhAnh} alt={listTicketRoom?.thongTinPhim?.tenPhim} />
                                <h4>{listTicketRoom?.thongTinPhim?.tenPhim}</h4>
                            </div>
                            <div className="checkout-right-policy">
                                <i className='icon-c18'></i>
                                <span className='notice'>(*) Phim chỉ dành cho khán giả từ 18 tuổi trở lên</span>
                            </div>
                            <div className="checkout-right-title border-bottom py-3">
                                <p>
                                    <span className='checkout-right-item'>
                                        Rạp:
                                    </span>
                                    {listTicketRoom?.thongTinPhim?.tenCumRap}
                                </p>
                                <p>
                                    {listTicketRoom?.thongTinPhim?.tenRap}
                                </p>
                            </div>
                            <div className='checkout-right-info border-bottom py-3'>
                                <span className='checkout-right-item'>Suất chiếu:</span>
                                {moment(listTicketRoom?.thongTinPhim?.ngayChieu).format(
                                    "dddd, DD/MM/YYYY"
                                ) +
                                    " | " +
                                    listTicketRoom?.thongTinPhim?.gioChieu}
                            </div>
                            <div className="checkout-right-class border-bottom py-3">
                                <span className='checkout-right-item'>Ghế: </span>
                                <span>
                                    {listSeatCurrentlySelected.length
                                        ? _.orderBy(listSeatCurrentlySelected, "maGhe").reduce(
                                            (seatTotal, seat) => {
                                                return seatTotal + seat.tenGhe + ','
                                            },
                                            ''
                                        ) : ''
                                    }
                                </span>
                            </div>
                            <div className='checkout-right-mony border-bottom py-3'>
                                <span className='checkout-right-item'>Tổng tiền: </span>
                                <span>
                                    {listSeatCurrentlySelected.reduce((totalMoney, seat) => {
                                        return totalMoney + seat.giaVe;
                                    }, 0)} VNĐ
                                </span>
                            </div>
                            <div
                                className="checkout-right-button py-3 my-3"
                                onClick={handleBookTicket}
                            >Đặt Vé</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${bookingSuccess ? 'd-block' : 'd-none'}`}>
                {ModalSuccess('Chúc mừng bạn đặt vé thành công', handleCheckoutSuccess)()}
            </div>
        </>
    )
}

export default Checkout

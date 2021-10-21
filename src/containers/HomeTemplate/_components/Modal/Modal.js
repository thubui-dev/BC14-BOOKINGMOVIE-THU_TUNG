import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchShowingMovie } from './Modules/actions'
import Loader from '../../../../component/Loader';
import './modal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, data } = useSelector((state) => state.modalShowReducer)

    useEffect(() => {
        const fetchData = () => {
            dispatch(actFetchShowingMovie(id))
        }
        fetchData(id)
    }, [dispatch, id])

    if (loading) return <Loader />

    return (
        <div>
            <button onClick={handleOpen} className='button'>
                <span>
                    <span>
                        Mua Ve
                    </span>

                </span>

            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Cụm rạp</td>
                                        <td>Tên rạp</td>
                                        <td>Ngày chiếu</td>
                                        <td>Giờ chiếu</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.heThongRapChieu?.map((item) => (
                                        <tr key={item.cumRapChieu[0].lichChieuPhim[0].maLichChieu}>
                                            <td>{item.maHeThongRap}</td>
                                            <td>{item.tenHeThongRap}</td>
                                            <td>
                                                {new Date(item.cumRapChieu[0].lichChieuPhim[0].ngayChieuGioChieu).toLocaleDateString()}
                                            </td>
                                            <td>
                                                {new Date(item.cumRapChieu[0].lichChieuPhim[0].ngayChieuGioChieu).toLocaleTimeString()}
                                            </td>
                                            <td>
                                                <a href="#dat-ve" className="btn btn-success">
                                                    Booking
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
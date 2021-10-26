import React, { useEffect, useState } from 'react';
import './modal.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchShowingMovie } from './Modules/actions'
import Loader from '../../../../component/Loader';
import RenderCumRap from './RenderCumRap';
import { Close } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '900px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const BasicModal = () => {
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
                        Mua Vé
                    </span>
                </span>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} className='modal-elx'>
                    <Close
                        className="modal-icon"
                        onClick={handleClose}
                    />
                    <div className='modal-render'>
                        {data?.heThongRapChieu.map((cumRap, index) => (
                            <div className='modal-render-rap' key={index}>
                                <div className="modal-render-rap-item">
                                    <img src={cumRap.logo} alt="" className='modal-render-rap-left' />
                                    <RenderCumRap cumRap={cumRap} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Box>
            </Modal>
        </div>
    )

}

export default BasicModal
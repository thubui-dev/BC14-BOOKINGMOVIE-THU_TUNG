import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Loader from '../../../../component/Loader';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchShowingMovie } from './Modules/actions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
};

export default function ModalTrailer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, data } = useSelector((state) => state.modalShowReducer)
    React.useEffect(() => {
        const fetchData = () => {
            dispatch(actFetchShowingMovie(id))
        }
        fetchData(id)
    }, [dispatch, id])

    if (loading) return <Loader />

    return (
        <div>
            <button onClick={handleOpen} className='button-trailer'>
                <span>
                    Trailer
                </span>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <iframe
                        width={560 * 1.5}
                        height={315 * 1.5}
                        src={data?.trailer}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Modal>
        </div>
    );
}
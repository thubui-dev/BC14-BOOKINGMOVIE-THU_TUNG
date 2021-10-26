import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material/';
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../img/LOGO.PNG'
import './footer.css'


const Footer = () => {
    const cgvInfo = [
        {
            display: 'Giới thiệu',
            path: '/gioi-thieu',
        },
        {
            display: 'Tiện Ích Online',
            path: '/tien-ich',
        },
        {
            display: 'Thẻ Quà Tặng',
            path: '/the-qua-tang',
        },
        {
            display: 'Tuyển dụng',
            path: '/tuyen-dung',
        },
        {
            display: 'Liên Hệ Quảng Cáo CGV',
            path: '/lien-he',
        },
    ]
    const cgvPolicy = [
        {
            display: 'Điều Khoản Chung',
            path: '/dieu-khoan-chung',
        },
        {
            display: 'Điều Khoản Giao Dịch',
            path: '/dieu-khoan-giao-dich',
        },
        {
            display: 'Chính Sách Thanh Toán',
            path: '/chinh-sach-thanh-toan',
        },
        {
            display: 'Chính Sách Bảo Mật',
            path: '/chinh-sach-bao-mat',
        },
        {
            display: 'Câu Hỏi Thường Gặp',
            path: '/cau-hoi-thuong-gap',
        },
    ]

    return (
        <div className='footer'>
            <div className="footer-brand">
                <div className="footer-brand-content">
                </div>
            </div>
            <div className="footer-policy">
                <div className="footer-policy-content">
                    <div className="row">
                        <div className="col-md-3 mb-4 col-sm-12">
                            <div className="footer-title">
                                <p>CGV Việt Nam</p>
                            </div>
                            <div className="footer-content">
                                {
                                    cgvInfo.map((item, index) => (
                                        <p key={index}>
                                            <Link className='footer-content-p' to={item.path}>{item.display}</Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 col-sm-12">
                            <div className="footer-title">
                                <p>Điều khoản sử dụng</p>
                            </div>
                            <div className="footer-content">
                                {
                                    cgvPolicy.map((item, index) => (
                                        <p key={index}>
                                            <Link className='footer-content-p' to={item.path}>{item.display}</Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 col-sm-12">
                            <div className="footer-title">
                                <p>Kết nối với chúng tôi</p>
                            </div>
                            <div className="footer-content">
                                <div className="footer-content-socail">
                                    <Link to='/'><Facebook className='footer-content-socail-icon' /></Link>
                                    <Link to='/'><YouTube className='footer-content-socail-icon footer-content-socail-youtue' /></Link>
                                    <Link to='/'><Instagram className='footer-content-socail-icon' /></Link>
                                    <Link to='/'><Twitter className='footer-content-socail-icon' /></Link>
                                </div>
                                <div className="footer-content-permision">
                                    <Link>
                                        <img src='https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG' alt='cgv-policy' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 col-sm-12">
                            <div className="footer-title">
                                <p>Chăm sóc khách hàng</p>
                            </div>
                            <div className="footer-content">
                                <p className='footer-content-p'>Hotline: 1900 6017</p>
                                <p className='footer-content-p'>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
                                <p className='footer-content-p'>Email hỗ trợ: hoidap@cgv.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-address">
                <div className="footer-address-content">
                    <div className="footer-address-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-address-cgv">
                        <h1 className='footer-title'>CÔNG TY TNHH CJ CGV VIETNAM</h1>
                        <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</p>
                        <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
                        <p>Hotline: 1900 6017</p>
                        <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

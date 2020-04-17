import React from 'react';
import './imgbannerdesk.css';

const bannerImg = require ('../../../Imgs/banner.jpg');

const ImgBannerDesk = ({img}) => <div className="img5_desk">
    <img className="img5_desk_img" src={img} />
</div>

ImgBannerDesk.defaultProps = {
    img: bannerImg
}

export default ImgBannerDesk;
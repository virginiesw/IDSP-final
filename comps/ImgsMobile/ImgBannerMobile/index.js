import React from 'react';
import './imgbannermobl.css';

const bannerImg = require ('../../../Imgs/banner.jpg');

const ImgBannerMobl = ({img}) => <div className="img5_mobl">
    <img className="img5_mobl_img" src={img} />
</div>

ImgBannerMobl.defaultProps = {
    img: bannerImg
}

export default ImgBannerMobl;
import React from 'react';
import './imgitemlistmobl.css';

const iphoneImg1 = require('../../../Imgs/iphone1.jpg');

const ImgItemListMobl = ({img}) => <div className="img2_mobl">
    <img className="img2_mobl_img" src={img} />
</div>

ImgItemListMobl.defaultProps = {
    img: iphoneImg1
}

export default ImgItemListMobl;
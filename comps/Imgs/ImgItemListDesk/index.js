import React from 'react';
import './imgitemlistdesk.css';

const iphoneImg1 = require('../../../Imgs/iphone1.jpg');

const ImgItemListDesk = ({img}) => <div className="img2_desk">
    <img className="img2_desk_img" src={img} />
</div>

ImgItemListDesk.defaultProps = {
    img: iphoneImg1
}

export default ImgItemListDesk;
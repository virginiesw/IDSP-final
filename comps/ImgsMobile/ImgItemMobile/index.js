
import React from 'react';
import './imgitemmobl.css';

const iphoneImg2 = require ('../../../Imgs/iphone2.jpg');

const ImgItemMobl = ({img}) => <div className="img3_mobl">
    <img className="img3_mobl_img" src={img} />
</div> 

ImgItemMobl.defaultProps = {
    img: iphoneImg2
}

export default ImgItemMobl;
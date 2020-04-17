
import React from 'react';
import './imgitemdesk.css';

const iphoneImg2 = require ('../../../Imgs/iphone2.jpg');

const ImgItemDesk = ({img}) => <div className="img3_desk">
    <img className="img3_desk_img" src={img} />
</div> 

ImgItemDesk.defaultProps = {
    img: iphoneImg2
}

export default ImgItemDesk;
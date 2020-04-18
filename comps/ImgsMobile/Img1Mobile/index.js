import React from 'react';
import './img1mobl.css';
import Button1Mobl from '../../ButtonsMobile/Button1M'


const imageCar = require('../../../Imgs/car.jpg');


const Img1Mobl = ({ img }) => <div className="img1_mobl">
    <img className="img1_mobl_img" src={img} />
    <div className="img1mobl_button1desk">
        <Button1Mobl />
    </div>
</div>

Img1Mobl.defaultProps = {
    img: imageCar
}



export default Img1Mobl;
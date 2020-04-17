import React from 'react';
import './img1desk.css';
import Button1Desk from '../../Buttons/Button1D'


const imageCar = require('../../../Imgs/car.jpg');


const Img1Desk = ({ img }) => <div className="img1_desk">
    <img className="img1_desk_img" src={img} />
    <div className="img1desk_button1desk">
        <Button1Desk />
    </div>
</div>

Img1Desk.defaultProps = {
    img: imageCar
}



export default Img1Desk;
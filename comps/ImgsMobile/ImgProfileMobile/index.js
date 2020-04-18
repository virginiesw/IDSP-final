import React from 'react';
import './imgprofilemobl.css';

const ProfileImg = require('../../../Imgs/profile.jpg');

const ImgProfileMobl = ({img}) => <div className="img6_mobl">
    <img className="img6_mobl_img" src={img} />
</div>

ImgProfileMobl.defaultProps = {
    img: ProfileImg
}

export default ImgProfileMobl;
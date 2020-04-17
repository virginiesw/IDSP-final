import React from 'react';
import './imgprofiledesk.css';

const ProfileImg = require('../../../Imgs/profile.jpg');

const ImgProfileDesk = ({img}) => <div className="img6_desk">
    <img className="img6_desk_img" src={img} />
</div>

ImgProfileDesk.defaultProps = {
    img: ProfileImg
}

export default ImgProfileDesk;
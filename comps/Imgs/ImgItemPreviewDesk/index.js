import React from 'react';
import './imgitempreviewdesk.css';

const iphoneImg3 = require ('../../../Imgs/iphone3.jpg');

const ImgItemPreviewDesk = ({img}) => <div className="img4_desk">
    <img className ="img4_desk_img" src={img} />
</div>

ImgItemPreviewDesk.defaultProps = {
    img: iphoneImg3
}

export default ImgItemPreviewDesk;
import React from 'react';
import './imgitempreviewmobl.css';

const iphoneImg3 = require ('../../../Imgs/iphone3.jpg');

const ImgItemPreviewMobl = ({img}) => <div className="img4_mobl">
    <img className ="img4_mobl_img" src={img} />
</div>

ImgItemPreviewMobl.defaultProps = {
    img: iphoneImg3
}

export default ImgItemPreviewMobl;
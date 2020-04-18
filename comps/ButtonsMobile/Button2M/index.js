import React from 'react';
import './button2m.css';
import Header5Mobl from '../../typographyMobile/Header5M';

const Button2Mobl = () => <div 
className="button2_Mobl">
    <div className="button2_Mobl_text">
        <Header5Mobl text="default button"/>
    </div>
</div> 

Button2Mobl.defaultProps = {
    text:"Default button"
}

export default Button2Mobl;
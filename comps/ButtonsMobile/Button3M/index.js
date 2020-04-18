import React from 'react';
import './button3m.css';
import Header5Mobl from '../../typographyMobile/Header5M';

const Button3Mobl = () => <div 
className="button3_Mobl">
    <div className="button3_Mobl_text">
        <Header5Mobl text="default button"/>
    </div>
</div> 

Button3Mobl.defaultProps = {
    text:"Default button"
}

export default Button3Mobl;
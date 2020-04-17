import React from 'react';
import './button2d.css';
import Header5Desk from '../../typography/Header5D';

const Button2Desk = () => <div 
className="button2_Desk">
    <div className="button2_Desk_text">
        <Header5Desk text="default button"/>
    </div>
</div> 

Button2Desk.defaultProps = {
    text:"Default button"
}

export default Button2Desk;
import React from 'react';
import './button3d.css';
import Header5Desk from '../../typography/Header5D';

const Button3Desk = () => <div 
className="button3_Desk">
    <div className="button3_Desk_text">
        <Header5Desk text="default button"/>
    </div>
</div> 

Button3Desk.defaultProps = {
    text:"Default button"
}

export default Button3Desk;
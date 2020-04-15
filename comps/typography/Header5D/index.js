import React from 'react';
import './header5d.css'

const Header5Desk = ({text}) => <div> <div className="header5D">
    {text}
</div>
</div>

Header5Desk.defaultProp = {
    text: "this is header 5"
}
 


export default Header5Desk;
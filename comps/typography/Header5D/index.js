import React from 'react';
import './header5d.css'

const Header5Desk = ({ text }) => <div>
    <div className="header5D">
        {text}
    </div>
</div>

Header5Desk.defaultProps = {
    text: "this is header style 5 desktop"
}



export default Header5Desk;
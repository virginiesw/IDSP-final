import React from 'react';
import './header6d.css'

const Header6Desk = ({text}) => <div> <h1 className="header6D">
    {text}
</h1>
</div>

Header6Desk.defaultProps = {
    text: "This is header style 6 desktop"
}

export default Header6Desk;
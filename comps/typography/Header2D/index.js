import React from 'react';
import './header2D.css'

const Header2Desk = ({text}) => <div> <h1 className="header2D">
    {text}
</h1>
</div>

Header2Desk.defaultProps = {
    text: "This is header style 2 desktop"
}

export default Header2Desk;
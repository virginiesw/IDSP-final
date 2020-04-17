import React from 'react';
import './header1D.css'

const Header1Desk = ({text}) => <div> <h1 className="header1D">
    {text}
</h1>
</div>

Header1Desk.defaultProps = {
    text: "This is header style 1 desktop"
}

export default Header1Desk;
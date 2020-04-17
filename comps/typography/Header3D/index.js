import React from 'react';
import './header3D.css'

const Header3Desk = ({text}) => <div> <h1 className="header3D">
    {text}
</h1>
</div>

Header3Desk.defaultProps = {
    text: "This is header style 3 desktop"
}



export default Header3Desk;
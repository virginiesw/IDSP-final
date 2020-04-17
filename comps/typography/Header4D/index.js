import React from 'react';
import './header4d.css'

const Header4Desk = ({text, lineHeight}) => <div> <h1 style={{lineHeight:lineHeight}} className="header4D">
    {text}
</h1>
</div>

Header4Desk.defaultProps = {
    text: "This is header style 4 desktop"
}

export default Header4Desk;
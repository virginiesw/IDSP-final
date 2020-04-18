import React from 'react';
import './header2M.css'

const Header2Mobl = ({text}) => <div> <h1 className="header2M">
    {text}
</h1>
</div>

Header2Mobl.defaultProps = {
    text: "This is header style 2 mobile"
}

export default Header2Mobl;
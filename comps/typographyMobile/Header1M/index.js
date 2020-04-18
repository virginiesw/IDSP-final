import React from 'react';
import './header1M.css'

const Header1Mobl = ({text}) => <div> <h1 className="header1M">
    {text}
</h1>
</div>

Header1Mobl.defaultProps = {
    text: "This is header style 1 mobile"
}

export default Header1Mobl;
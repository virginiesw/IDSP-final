import React from 'react';
import './header6M.css'

const Header6Mobl = ({text}) => <div> <h1 className="header6M">
    {text}
</h1>
</div>

Header6Mobl.defaultProps = {
    text: "This is header style 6 mobile"
}

export default Header6Mobl;
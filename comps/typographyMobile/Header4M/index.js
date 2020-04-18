import React from 'react';
import './header4M.css'

const Header4Mobl = ({text, lineHeight}) => <div> <h1 style={{lineHeight:lineHeight}} className="header4M">
    {text}
</h1>
</div>

Header4Mobl.defaultProps = {
    text: "This is header style 4 mobile"
}

export default Header4Mobl;
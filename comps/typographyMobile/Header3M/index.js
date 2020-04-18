import React from 'react';
import './header3M.css'

const Header3Mobl = ({text}) => <div> <h1 className="header3M">
    {text}
</h1>
</div>

Header3Mobl.defaultProps = {
    text: "This is header style 3 mobile"
}



export default Header3Mobl;
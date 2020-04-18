import React from 'react';
import './header5M.css'

const Header5Mobl = ({ text }) => <div>
    <div className="header5M">
        {text}
    </div>
</div>

Header5Mobl.defaultProps = {
    text: "This is header style 5 mobile"
}



export default Header5Mobl;
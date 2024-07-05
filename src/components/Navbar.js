import React from 'react';
import PropTypes from 'prop-types';


export function Navbar(props) {
    return (
        <div>
            <header>
                <div className="text-center w-full p-5 m-2 bg-[#ffbf69] text-white">
                    <p className='font-bold'>{props.title}</p>
                </div>
            </header>
        </div>
    )
}

export default Navbar

Navbar.prototype = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'set title here'
};

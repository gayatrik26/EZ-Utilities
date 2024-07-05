import React from 'react';
import PropTypes from 'prop-types';


function Footer(props) {
    return (
        <div>
            <footer className='w-full text-center p-5 m-2 bg-[#ffbf69] text-white'>
                <p className='font-bold'>&copy; 2024 {props.title}</p>
            </footer>
        </div>
    )
}

export default Footer

Footer.prototype = {
    title: PropTypes.string.isRequired
};

Footer.defaultProps = {
    title: 'set title here'
};
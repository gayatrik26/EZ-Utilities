import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({goBackClick}) => {
    const [color, setColor] = useState('#ffffff');

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div className="page-container" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
            <h1 style={{fontSize:"1.4rem" , fontWeight : "600" , margin : "0.3rem" , alignSelf:"flex-start"}}>Color Picker</h1>
            <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
            <div style={{ marginTop: '15px' , textAlign: "center" , display:"flex" }}>
                <h2 style={{margin:"0.3rem"}}>Selected Color:</h2>
                <div style={{ backgroundColor: color, width: '50px', height: '50px' }}></div>
            </div>
            <div style={{ alignSelf:"flex-start" , margin:"0.4rem" , backgroundColor:"#ffbf69",color:"white" , padding:"0.3rem 0.6rem", borderRadius:"0.25rem",cursor:"pointer", fontSize:"0.75rem"}}>
                <button onClick={goBackClick}>Go Home</button>
            </div>
        </div>
    );
}; 

export default ColorPicker;

import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
    aspectRatio:"21/9"
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} src="https://hdqwalls.com/wallpapers/beautiful-scenery.jpg" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;
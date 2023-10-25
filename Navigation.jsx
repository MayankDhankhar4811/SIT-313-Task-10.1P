import React from 'react';
import './navigation.css';

function Navigation(){
    return(
        <div className='nav'>
            <div className='center'>
                <h2>DEV@Deakin</h2>
            </div>
            <div className="center">
                <input type="text" id="search-bar" placeholder='Search Google or type a URL'></input>
            </div>
            <div className='center'>
                <h2>Post</h2>
            </div>
            <div className='center'>
                <h2>Login</h2>
            </div>
        </div>
    )
}

export default Navigation;
//qjfymyozhmeotuvt
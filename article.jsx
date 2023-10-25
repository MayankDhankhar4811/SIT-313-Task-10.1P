import React from 'react';
import './artical.css';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}

function Article(props){
    return(
        <div className="container">
            <div style={center}>
                <img className="thumbnail" src={props.thumbnail} alt="Thumbnail" />
            </div >
            <div style={center} className="title">
                <h3>{props.title}</h3>
            </div>
            <div style={center} className="description-container">
                <p className="description">{props.description}</p>
            </div>
            <div style={center}className="author-container">
                <p><b>{props.rating}<img src="https://cdn1.iconfinder.com/data/icons/business-management-and-growth-23/64/1157-512.png" alt="star" className="star"></img> {props.author}</b></p>
            </div>
        </div>
    )
}

export default Article;
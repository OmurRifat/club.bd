import React from 'react';
import './Item.css'

const Item = (props) => {
    // console.log(props)
    const { name, duration, range, img, id } = props.item;
    const handlePlayingTime = props.handlePlayingTime;
    return (
        <div className='item-container'>
            <img src={ img } alt="" />
            <div className="item-details">
                <h4>Name: { name }</h4>
                <p>Age Range: { range } </p>
                <p>Time required: { duration }s</p>
                <button onClick={ () => { handlePlayingTime(duration) } }>Select This Game</button>
            </div>
        </div>
    );
};

export default Item;
import React, { useEffect, useState } from 'react';
import './Items.css'
import Item from '../Item/Item'
import Profile from '../Profile/Profile'

const Items = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [gap, setGap] = useState({});
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    useEffect(() => {
        fetch('breakData.json')
            .then(res => res.json())
            .then(data => setGap(data));
    }, [])
    const handlePlayingTime = (duration) => {
        // console.log("It's working")
        let newCout = count + duration;
        setCount(newCout);
    }
    return (
        <div>
            <h2 >Choose Your Game..!</h2>
            <div className='items-section'>
                <div className='items-container'>
                    {
                        items.map(item => <Item
                            item={ item }
                            key={ item.id }
                            handlePlayingTime={ handlePlayingTime }
                        ></Item>)
                    }
                </div>
                <div>
                    <Profile
                        duration={ count }
                        gap={ gap }
                    ></Profile>
                </div>
            </div>
        </div>
    );
};

export default Items;
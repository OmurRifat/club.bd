import React, { useEffect, useState } from 'react';
import './Items.css'
import Item from '../Item/Item'
import Profile from '../Profile/Profile'

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2 >Selet today's exercis</h2>
            <div className='items-section'>
                <div className='items-container'>
                    {
                        items.map(item => <Item></Item>)
                    }
                </div>
                <div>
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
};

export default Items;
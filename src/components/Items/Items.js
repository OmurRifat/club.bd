import React from 'react';
import './Items.css'
import Item from '../Item/Item'
import Profile from '../Profile/Profile'

const Items = () => {
    return (
        <div>
            <h2>Selet today's exercis</h2>
            <div className='items-section'>
                <div>
                    <Item></Item>
                </div>
                <div>
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
};

export default Items;
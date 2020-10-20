import React from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import downArrow from '../img/down-arrow.svg';

export default function Header() {
    return (
        <div>
            <div>
                <p>Video of anything. anywhere.</p>
                <p> String has a network of over 125,000 videographers to get you the footage you want, when you need it.</p>
                <button>Learn more</button>
                <a href="/what_is_stringr">
                    <img src={downArrow} alt="what is stringr" />
                </a>
            </div>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
           
        </div>
    )
}
import React from 'react';
import P1 from '../pics/P1.jpg';

function E1(){
    return(
        <div>
            <h1>2.15.22</h1>
            <span>This was supposed to be what happened yesterday but I fucked up and I don't know how the fuck React works.</span> 
            <iframe src="https://open.spotify.com/embed/track/5dXWFMwD7I7zXsInONVl0H?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>        
            <div className="photo-vids">
                <img src={P1}/>
            </div>
        </div>
    )
}

export default E1;
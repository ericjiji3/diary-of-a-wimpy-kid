import React from 'react';
import v52 from '../vids/v52.mp4';

function E52(){
    return(
        <div>
            <h1>4.7.22</h1>
            <span>"Far too often we get entangled in setting up some goal, and by pursuing that goal we invest it with the power to give meaning to our lives. Ironically, and unfortunately, we suffer because of our goals. 
                Inflating a goal with great significance sets our 'self' in opposition to the goal, and we suffer in direct proportion to our fixation with attaining the goal. Consequently, there is always going to be a sense of 
                instability or anxiety in our lives"
            </span>
            <iframe src="https://open.spotify.com/embed/track/12W3pDsHMFZIPzM9MXs7Qn?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <div className="photo-vids">
                <video width="500" height="500" controls >
                    <source src={v52} type="video/mp4"/>
                </video>
            </div>
        </div>
    )}

export default E52;
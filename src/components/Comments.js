import React from "react";
import video from "../data/video";
import { v4 as uuid } from "uuid";

function Comments (){

    return(
        <div>
            
            <hr/>
            <h3>{video.comments.length} Comments</h3>
            {
                video.comments.map(
                    (index)=>{return (
                    <div>
                    <h4 key={uuid()}>{index.user}</h4> 
                    <h5 key={uuid()}>{index.comment}</h5>
                    </div>
                    )}
                )
                }
        </div>
    )
}

export default Comments
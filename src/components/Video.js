import React , {useState} from "react";
import video from "../data/video";
import VoteButtons from "./Vote Buttons";
import Comments from "./Comments";

function Video () {
    const [upButtonState, setUpButtonState] = useState(video.upvotes);
    const [downButtonState, setDownButtonState] = useState(video.downvotes);
    const [hideShowComments, sethideShowComments] = useState(<Comments />)

    function setUpButton(){
        let increment = upButtonState + 1;
        setUpButtonState(increment)
    }

    function setDownButton(){
        let increment = downButtonState + 1;
        setDownButtonState(increment)
    }

    

    function handleHideShowComments (){
        let toggle = hideShowComments===null ? <Comments /> : null;
        sethideShowComments(toggle)
        
    }

return (
<div>
    <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <h3>views {video.views} | Uploaded {video.createdAt}</h3>
      <VoteButtons upButtonState={upButtonState} downButtonState={downButtonState} setUpButtonState={setUpButton} setDownButtonState={setDownButton}/>
      <button onClick={handleHideShowComments}>{hideShowComments===null ? "Show Comments" : "Hide Comments"  }</button>
      {hideShowComments}
</div>
)
}






export default Video
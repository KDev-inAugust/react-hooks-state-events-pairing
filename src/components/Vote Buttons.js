import React from "react";

function VoteButtons({upButtonState, downButtonState, setUpButtonState, setDownButtonState}){
return (
    <div>
    <button onClick={setUpButtonState}>👍 {upButtonState}</button>
    <button onClick={setDownButtonState}>👎 {downButtonState}</button>
    </div>
)
}


export default VoteButtons
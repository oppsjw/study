import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>시계 만들기</h1>
            <h3>현재 시간은 {new Date().toLocaleTimeString()}</h3>
        </div>
    );
}

export default Clock;
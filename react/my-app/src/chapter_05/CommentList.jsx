import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "Hello world!",
    },
    {
        name: "유재석",
        comment: "너무 재밌어요!",
    },
    {
        name: "김대호",
        comment: "회사에서 내가 0.2면 다른사람이 1.8 할 수도 있다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
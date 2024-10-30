import { useState } from "react";
import Navbar from "../components/navbar";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comment");
    const data = await response.json();

    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comment/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-start p-5 m-8 font-bold text-2xl">
        <button onClick={submitComment}>Submit Comment :-) </button>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border border-black mx-10 font-mono"
        />
      </div>
      <div className="flex justify-center p-1 mx-10 bg-blue-600 rounded-full text-orange-500 font-bold text-xl">
        <button onClick={fetchComments}>Load Comments </button>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div
              className="flex justify-start order-3 p-2 mt-5 mx-10 text-blue-gray-700 font-serif text-xl"
              key={comment.id}
            >
              {" "}
              {comment.id} :- {comment.text}
              <button onClick={() => deleteComment(comment.id)}>
                {" "}
                Delete (X){" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommentsPage;

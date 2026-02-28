import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const [ans, setAns] = useState(0);
  const { userid } = useParams();
  fetch(`https://api.github.com/users/${userid}`)
    .then((res) => res.json())
    .then((res) => setAns(res));

  return (
    <div className="bg-gray-600 text-center text-white text-3xl p-4">
      Github Follower : {ans.followers}
      <img  src={ans.avatar_url}></img>
    </div>
  );
}

export default Github;

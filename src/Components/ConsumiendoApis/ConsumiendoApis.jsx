import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  useEffect(() => {
    const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: "Hola",
        userId: 1,
        body: "Hola todo bien?",
      }),
    });
    
    createPost.then((res) => console.log(res));
  }, []);

  return <div>ConsumiendoApis</div>;
};

export default ConsumiendoApis;

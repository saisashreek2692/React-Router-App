import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/saisashreek2692')
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt={data.login} />
    </div>
  );
}

export default GitHub;


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/saisashreek2692')
    return res.json()
}
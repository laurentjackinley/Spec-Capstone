import React from "react";
import axios from "axios";

// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PremierLeague() {
  const [data, setData] = useState({});

  //   const { premiere } = useParams();

  useEffect(() => {
    axios({
      url: "https://api.football-data.org/v4/competitions/PL",
      method: "get",
      headers: { "X-Auth-Token": "cf0ca5b0339e4a0db8317403235199d7" },
    }).then((res) => setData(res.data));
  });

  return (
    <div>
      <h1>Premiere</h1>
      <img src={data.crests} alt="" />
      <h2>{data.name}</h2>
    </div>
  );
}
export default PremierLeague;

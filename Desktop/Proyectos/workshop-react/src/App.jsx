import { useState, useEffect } from "react";
import * as API from "./services/launches.js";
import logo from "./assets/index.png";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <img src={logo} width={300} />
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </li>
        ))}
      </ul>
    </>
  );
}

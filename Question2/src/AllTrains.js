import React, { useState, useEffect } from 'react';

import { getAllTrains, getToken } from './helper';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    (async () => {
        const token = await getToken();
        const allTrains = await getAllTrains(token);
        setTrains(allTrains)
        console.log(allTrains)
    })()
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Seats Available (Sleeper)</th>
            <th>Seats Available (AC)</th>
            <th>Price (Sleeper)</th>
            <th>Price (AC)</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.trainNumber}>
              <td>
                <a href={`/train/${train.trainNumber}`}>{train.trainNumber}</a>
              </td>
              <td>{train.trainName}</td>
              <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
              <td>{train.seatsAvailable.sleeper}</td>
              <td>{train.seatsAvailable.AC}</td>
              <td>{train.price.sleeper}</td>
              <td>{train.price.AC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTrains;

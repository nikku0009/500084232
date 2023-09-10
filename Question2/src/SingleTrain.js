import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getAllTrains, getToken, getTrain } from './helper';

function SingleTrain() {
  const [train, setTrain] = useState({});
  const { trainNumber } = useParams();

  useEffect(() => {
    (async () => {
        const token = await getToken();
        const trainData = await getAllTrains(token, trainNumber);
        setTrain(trainData)
        console.log(trainData)
    })()
  }, [trainNumber]);

  return (
    <div>
      <h1>Train Details</h1>
      <p>Train Number: {train.trainNumber}</p>
      <p>Train Name: {train.trainName}</p>
      <p>Departure Time: {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</p>
      <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
      <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
      <p>Price (Sleeper): {train.price.sleeper}</p>
      <p>Price (AC): {train.price.AC}</p>
    </div>
  );
}

export default SingleTrain;

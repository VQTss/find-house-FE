import React from "react";
import { useParams } from "react-router-dom";

const City: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  return <h1>Concerts in {city}</h1>;
};

export default City;

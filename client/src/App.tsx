import { useState, useEffect } from "react";
import axios from "axios";
import CarouselPic from "./components/CarouselPic";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [emo, setEmo] = useState("");
  const fetchEmo = async () => {
    const response = await axios.get("http://localhost:8080/api/emotion");
    setEmo(response.data.emotion);
  };
  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api/users");
  //   setArray(response.data.users);
  // };
  useEffect(() => {
    fetchEmo();
  });
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <>
      <div className="card">
        <CarouselPic />
      </div>
      <div>
        <p>{emo}</p>
        <p>
          {array.map((user, index) => (
            <span key={index}> {user} </span>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;

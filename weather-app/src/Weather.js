import { useState, useEffect } from "react";

export default function Weather() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const APIKey = "dff66f482b75e67f4d243b0151d2ad5b";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setTemp(data.main.temp).catch((error) => console.log(error)),
      )
      .catch((error) => console.log(error));
  }, [city]);

  function handleCity(e) {
    if (city.length < 2) {
      setTemp("");
    }
    setCity(e.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input placeholder="Enter city" onChange={handleCity} />
      <p>{temp} °F</p>
    </div>
  );
}

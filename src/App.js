import React, { useEffect, useState } from "react";
import List from "./components/List";
import data from "./components/data";

function App() {
  const [isDark, setIsDark] = useState(true);

  const cambiaTema = () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle("dark-card");
    });
    setIsDark(!isDark);
  };

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <button className='btn btn-primary' onClick={cambiaTema}>
          {isDark ? "Chiaro" : "Scuro"}
        </button>
      </div>
      <div className='container'>
        <div className='row'>
          <List data={data} />;
        </div>
      </div>
    </>
  );
}

export default App;

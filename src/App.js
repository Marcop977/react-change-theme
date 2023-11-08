import React, { useEffect, useState } from "react";
import List from "./components/List";
import data from "./components/data";

const getThemeFromLocal = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-theme";
  }
};

function App() {
  const [theme, setTheme] = useState(getThemeFromLocal());

  const cambiaTema = () => {
    if (getThemeFromLocal() === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <button className='btn' onClick={cambiaTema}>
          {theme === "light-theme" ? "Dark" : "Light"}
        </button>
      </div>
      <div className='container'>
        <div className='row'>
          <List data={data} />
        </div>
      </div>
    </>
  );
}

export default App;

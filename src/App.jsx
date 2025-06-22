import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetch from cache");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const api_data = await res.json();
        localStorage.setItem(localKey, JSON.stringify(api_data));
        setData(api_data);
        console.log("Fetch from API today");
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIData();
  }, []);

  function handleToggleModal() {
    setShowModal((prev) => !prev);
  }
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
};

export default App;

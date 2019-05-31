import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDataApi } from "../../../customHooks/useDataApi";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BotCards from "../BotCards/BotCards";
import ApexChart from "../ApexChart/ApexChart";

const App = () => {
  const [{ data, isLoading }] = useDataApi();
  const { data: storedData } = localStorage;
  const localData = storedData ? JSON.parse(storedData) : {};

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("dataDate", Date.now());
  }, [data]);

  const rendBotSection = () => (
    <>
      <ApexChart />
      <BotCards isLoading={isLoading} bots={localData.bots} />
    </>
  );

  return (
    <>
      <Header isLoading={isLoading} data={localData} />

      <Switch>
        <Route path="/" render={rendBotSection} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;

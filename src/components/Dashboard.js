// src/components/Dashboard.js
import React from "react";
import { useTranslation } from "react-i18next";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")}>{t("language.en")}</button>
        <button onClick={() => changeLanguage("ar")}>{t("language.ar")}</button>
      </div>
      <h1>{t("dashboard.title")}</h1>
      <div>
        <h2>{t("charts.barChart")}</h2>
        <BarChart />
      </div>
      <div>
        <h2>{t("charts.pieChart")}</h2>
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;

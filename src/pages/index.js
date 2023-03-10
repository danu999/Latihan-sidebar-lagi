import BaseLayout from "../components/BaseLayout";
import React from "react";
import Cards from "@/components/Cards/Cards";


const Dashboard = () => {
  return (
  <BaseLayout>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Cards />
    </div>
  </BaseLayout>
  )
};

export default Dashboard;

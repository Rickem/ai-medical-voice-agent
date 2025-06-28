import React from "react";
import HistoryList from "./_components/HistoryList";
import AddNewSessionDialog from "./_components/AddNewSessionDialog";
import DoctorAgentList from "./_components/DoctorAgentList";

const DashboardPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <AddNewSessionDialog />
      </div>
      <HistoryList />
      <DoctorAgentList />
    </div>
  );
};

export default DashboardPage;

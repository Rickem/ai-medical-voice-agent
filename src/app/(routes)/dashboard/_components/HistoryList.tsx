"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import AddNewSessionDialog from "./AddNewSessionDialog";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="mt-10">
      {historyList.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-7 border-dashed border-2 rounded-2xl">
          <Image
            src={"/medical-assistance.png"}
            alt="Med Assistance"
            width={150}
            height={150}
          />
          <h2 className="text-xl font-bold">No recent consultation</h2>
          <p>It looks like you haven't consulted any doctors yet.</p>
          <AddNewSessionDialog />
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
};

export default HistoryList;

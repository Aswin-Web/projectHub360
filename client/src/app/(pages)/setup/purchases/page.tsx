"use client";
import React, { useEffect, useState } from "react";
import { getPurchasedSeervices } from "./networkcalls.purchase";
import TableList from "@/components/TableList";

const page = () => {
  const [purchaseService, setPurchaseService] = useState([]);
  console.log("🚀 ~ page ~ purchaseService:", purchaseService);
  useEffect(() => {
    getPurchasedSeervices()
      .then((item) => {
        console.log("🚀 ~ .then ~ item:", item);
        setPurchaseService(item);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const columnNames = Object.keys(purchaseService?.[0] || [])
  return (
    <div>
      <div>Org Purchases</div>
      {/* Table */}
      <div>
        <TableList columns={columnNames} data={purchaseService} />
      </div>
    </div>
  );
};

export default page;

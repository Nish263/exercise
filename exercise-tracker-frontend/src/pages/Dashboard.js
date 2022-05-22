import React, { useEffect } from "react";
import { MainLayout, useNavigate } from "../components/layout/MainLayout";

export const Dashboard = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   if (!user?._id) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <MainLayout>
      <h1>dashboard</h1>
    </MainLayout>
  );
};

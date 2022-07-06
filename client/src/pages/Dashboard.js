import React, { useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ExerciseForm } from "../components/exercise-form/ExerciseForm";
import { CustomerTable } from "../components/custom-table/CustomerTable";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <MainLayout>
      <div>
        <ExerciseForm />
        <hr />
        <CustomerTable />
      </div>
    </MainLayout>
  );
};

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import MainLayout from "@/MainLayout/MainLayout";
import Loader from "@/components/custom/Loader";
import NotFound from "@/components/custom/NotFound";

// Lazy load the MainComponents
const MainComponents = lazy(() =>
  import("@/components/custom/MainComponent/MainComponents")
);

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <MainComponents />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;

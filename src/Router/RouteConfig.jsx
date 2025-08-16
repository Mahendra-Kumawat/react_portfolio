import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/MainLayout/MainLayout';
import Loader from '@/components/custom/Loader';

// Lazy load the MainComponents
const MainComponents = lazy(() => import('@/components/custom/MainComponent/MainComponents'));

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={
          <Suspense fallback={<Loader />}>
            <MainComponents />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};

export default RouteConfig;
import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/MainLayout/MainLayout';
import MainComponents from '@/components/custom/MainComponent/MainComponents';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainComponents />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from '../../presentation/components/template/Layout';
import Home from '../../presentation/pages/Home';
import ItemDetailPage from '../../presentation/pages/Detail';
import ItemList from '../../presentation/components/organism/Search/ItemList';

export function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

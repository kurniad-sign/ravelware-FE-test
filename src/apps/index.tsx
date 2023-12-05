import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { AppLayout } from './layout';
import DashboardRoute from './routes/dashboard';
import FuelTransactionRoute from './routes/report/fuel-transaction';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<DashboardRoute />} />
      <Route
        path="/report/fuel-transaction-history"
        element={<FuelTransactionRoute />}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

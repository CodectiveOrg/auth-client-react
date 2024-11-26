import { BrowserRouter, Route, Routes } from "react-router";

import DefaultLayout from "./layouts/default/default.layout.tsx";

import AuthGuard from "./guards/auth.guard.tsx";

import HomePage from "./pages/home/home.page.tsx";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthGuard />}>
            <Route path="/dashboard">
              <Route index element={<DashboardPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

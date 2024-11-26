import { BrowserRouter, Route, Routes } from "react-router";

import AuthProvider from "./providers/auth.provider.tsx";

import DefaultLayout from "./layouts/default/default.layout.tsx";

import AuthGuard from "./guards/auth.guard.tsx";

import HomePage from "./pages/home/home.page.tsx";
import SignInPage from "./pages/auth/sign-in/sign-in.page.tsx";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/sign-in" element={<SignInPage />} />
            <Route element={<AuthGuard />}>
              <Route path="/dashboard">
                <Route index element={<DashboardPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

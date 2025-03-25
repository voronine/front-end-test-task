import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/home";
import SignInPage from "./app/signIn";
import StoreProvider from "./components/StoreProvider";
import UIProvider from "./components/UIProvider";
import DarkModeToggle from "./components/DarkModeToggle";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <UIProvider>
          <DarkModeToggle />
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/sign-in"
              element={
                <PageWrapper>
                  <SignInPage />
                </PageWrapper>
              }
            />
          </Routes>
        </UIProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./app/home";
import StoreProvider from "./components/StoreProvider";
import UIProvider from "./components/UIProvider";
import SignInPage from "./app/signIn";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
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

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default App;

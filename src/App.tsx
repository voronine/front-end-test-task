// App.tsx
import React, { Component, ErrorInfo, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./app/home";
import SignInPage from "./app/signIn";
import StoreProvider from "./components/StoreProvider";
import UIProvider from "./components/UIProvider";
import DarkModeToggle from "./components/DarkModeToggle";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <UIProvider>
          <ErrorBoundary fallback={<div>Oops, an unexpected error occurred.</div>}>
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
          </ErrorBoundary>
        </UIProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;

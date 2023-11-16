import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeComponent from "./components/theme/ThemeComponent";
import { LanguageContextProvider } from "./context/language";
import { SettingsConsumer, SettingsProvider } from "./context/settingsContext";
import "./index.css";
import "./query.css";
import { AuthProvider } from "./context/auth-and-perm/AuthProvider";
import Loading from "./components/molecules/Loading";
import { UserProvider } from "./context/user provider/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <LoadingContextProvider> */}
    <LanguageContextProvider>
      <BrowserRouter>
      <UserProvider>

        <AuthProvider>
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <HelmetProvider>
                        <ProSidebarProvider>
                          <Suspense fallback={<Loading />}>
                            <App />
                          </Suspense>
                        </ProSidebarProvider>
                    </HelmetProvider>
                  </ThemeComponent>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
        </UserProvider>

      </BrowserRouter>
    </LanguageContextProvider>
    {/* </LoadingContextProvider> */}
  </QueryClientProvider>
);

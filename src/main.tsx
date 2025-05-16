import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "@/style/styles.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RecoilRoot>
        <RecoilNexus />
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </RecoilRoot>
    </BrowserRouter>
  </QueryClientProvider>
);

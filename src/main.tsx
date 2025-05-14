import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecoilRoot>
      <RecoilNexus />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </RecoilRoot>
  </BrowserRouter>
);

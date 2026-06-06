import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/krftist/Layout";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetail from "@/pages/ServiceDetail";
import WorkPage from "@/pages/WorkPage";
import ProcessPage from "@/pages/ProcessPage";
import ContactPage from "@/pages/ContactPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ArticleDetail from "@/pages/ArticleDetail";
import ReelPage from "@/pages/ReelPage";

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/reel" element={<ReelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0F1F25",
            border: "1px solid rgba(238,213,183,0.18)",
            color: "#EED5B7",
            fontFamily: "Almarai, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;

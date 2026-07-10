import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DailyDrawPage from "./pages/DailyDrawPage";
import SpreadBrowserPage from "./pages/SpreadBrowserPage";
import SpreadReadingPage from "./pages/SpreadReadingPage";
import CardLibraryPage from "./pages/CardLibraryPage";
import CardDetailPage from "./pages/CardDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/draw/daily" element={<DailyDrawPage />} />
      <Route path="/spreads" element={<SpreadBrowserPage />} />
      <Route path="/spreads/:id" element={<SpreadReadingPage />} />
      <Route path="/cards" element={<CardLibraryPage />} />
      <Route path="/cards/:id" element={<CardDetailPage />} />
    </Routes>
  );
}

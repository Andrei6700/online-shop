import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./UI-Form/SecondPage";
import { PaginaMain } from "./UI/importToPage/pagina-main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaMain />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

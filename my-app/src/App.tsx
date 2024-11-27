import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TarefaList from "./components/TarefaList";
import TarefaCadastrar from "./pages/TarefaCadastrar";
import TarefaAlterar from "./pages/TarefaAlterar";

const App: React.FC = () => (
   <Router>
       <Routes>
           <Route path="/" element={<TarefaList />} />
           <Route path="/cadastrar" element={<TarefaCadastrar />} />
           <Route path="/alterar" element={<TarefaAlterar />} />
       </Routes>
   </Router>
);

export default App;

import React, { useState } from "react";
import axios from "axios";

const TarefaCadastrar: React.FC = () => {
    const [nome, setNome] = useState("");
    const [categoriaId, setCategoriaId] = useState(1);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const novaTarefa = { nome, categoriaId };
        await axios.post("http://localhost:5000/api/tarefa/cadastrar", novaTarefa);
        setNome("");
    };

    return (
        <div>
            <h2>Cadastrar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default TarefaCadastrar;

import React, { useState } from "react";
import axios from "axios";

const TarefaAlterar: React.FC = () => {
    const [id, setId] = useState(0);

    const alterarStatus = async () => {
        await axios.patch(`http://localhost:5273/tarefas/alterar/{id}`);
    };

    return (
        <div>
            <h2>Alterar Status da Tarefa</h2>
            <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} placeholder="ID da tarefa" />
            <button onClick={alterarStatus}>Alterar Status</button>
        </div>
    );
};

export default TarefaAlterar;

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tarefa {
    id: number;
    Nome: string;
    status: string;
    CategoriaId: { Nome: string };

    
}

const TarefaList: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5273/tarefas/alterar/{id}")
            .then(response => {
                setTarefas(response.data);
            })
            .catch(error => console.error("Erro ao carregar tarefas", error));
    }, []);

    return (
        <div>
            <h2>Tarefas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descricao</th>
                        <th>CriadoEm</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.Nome}</td>
                            <td>{tarefa.status}</td>
                            <td>{tarefa.CategoriaId.Nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TarefaList;

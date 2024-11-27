import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlterarTarefa: React.FC = () => {
  const [tarefaId, setTarefaId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5273/api/tarefas/alterar/${tarefaId}`);
      alert('Status alterado com sucesso!');
    } catch (error) {
      console.error('Erro ao alterar status:', error);
    }
  };

  return (
    <div>
      <h2>Alterar Status da Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tarefaId}
          onChange={e => setTarefaId(e.target.value)}
          placeholder="ID da Tarefa"
          required
        />
        <button type="submit">Alterar Status</button>
      </form>
    </div>
  );
};

export default AlterarTarefa;

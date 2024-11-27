import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastrarTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    // Carregar categorias da API
    axios.get('http://localhost:5273/api/categoria/listar')
      .then(response => setCategorias(response.data))
      .catch(error => console.error('Erro ao carregar categorias:', error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newTarefa = { titulo, descricao, categoriaId };
      await axios.post('http://localhost:5273/api/tarefas/cadastrar', newTarefa);
      alert('Tarefa cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar tarefa:', error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" required />
        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição" required />
        <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
          <option value="">Selecione uma categoria</option>
          {categorias.map((categoria: any) => (
            <option key={categoria.categoriaId} value={categoria.categoriaId}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarTarefa;

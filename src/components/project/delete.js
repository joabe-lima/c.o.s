import React from 'react';
import { VscTrash } from "react-icons/vsc";
import './delete.css'

const ExcluirDado = ({ id }) => {
  const excluirDado = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/clientes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Dado excluído com sucesso');
        // Atualize o estado ou faça outras ações necessárias
      } else {
        console.error('Falha ao excluir dado');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação', error);
    }
  };

  return (
    <button onClick={excluirDado}>
      <td><VscTrash color='red' size={25} cursor={'pointer'}/></td>
    </button>
  );
};

export default ExcluirDado;
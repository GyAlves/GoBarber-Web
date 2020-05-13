import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

export const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="submit">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="sucess" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="submit">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="submit">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '@/config/libs';

export const loginUser = () => {
  const navigate = useNavigate();

  const login = useMutation(async (data) => {
    try {
      const response = await httpClient.post('/api/login', data);

      if (response.data.success) {
        navigate('/layout-page');
      } else {
        console.log('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro durante a autenticação:', error);
    }
  });

  return login;
};

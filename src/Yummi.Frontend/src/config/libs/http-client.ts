import { getEnv } from '@/utils';
import Axios from 'axios';

export const httpClient = Axios.create({
  baseURL: getEnv('API_URL')
});

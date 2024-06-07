import { socratesAPi } from '../config/socratesAPI';
import { CenterResponse } from '../interface/center-response';

export const getCenterInfo = async () => {
  try {
    const { data } = await socratesAPi.post<CenterResponse>('/getCenter', {
      center_id: 5472,
    });
    console.log(data);
    return data || null;
  } catch (error) {
    console.error('Error fetching center:', error);
    return null;
  }
};
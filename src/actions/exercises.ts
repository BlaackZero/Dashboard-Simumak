import { socratesAPi } from '../config/socratesAPI';
import { ExercisesResponse } from '../interface/exercises-response';

export const getExercises = async () => {
  try {
    const { data } = await socratesAPi.post<ExercisesResponse>('/getExercises', {
      center_id: 5472,
    });
    console.log(data);
    return data || null;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return null;
  }
};
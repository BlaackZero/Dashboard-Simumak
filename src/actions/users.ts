import { socratesAPi } from '../config/socratesAPI';
import { User, UsersResponse } from '../interface/users-response';

export const getUsers = async () => {
  try {
    const { data } = await socratesAPi.post<UsersResponse>('/getUsers', {
      center_id: 5472,
    });
    console.log(data);
    return data || null;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

export const getUser = async (id: string) => {
  const IntId = parseInt(id);
  try {
    const { data } = await socratesAPi.post<User>('/getUser', {
      center_id: 5472,
      member_id: IntId,
    });
    console.log(data);
    return data || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
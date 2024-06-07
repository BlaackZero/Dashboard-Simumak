import { create } from "zustand";
import { UsersState } from "../../interface/users-response";
import { getUsers } from "../../actions/users";

export const useUsersStore = create<UsersState>((set) => ({
    usersInfo: null,
    fetchUsers: async () => {
        const usersInfo = await getUsers();
        set({ usersInfo });
    }
}));
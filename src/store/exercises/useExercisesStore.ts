import { create } from "zustand";
import { ExercisesState } from "../../interface/exercises-response";
import { getExercises } from "../../actions/exercises";

export const useExercisesStore = create<ExercisesState>((set) => ({
    exercisesInfo: null,
    fetchExercises: async () => {
        const exercisesInfo = await getExercises();
        set({ exercisesInfo });
    }
}));
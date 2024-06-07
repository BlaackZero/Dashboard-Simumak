export interface ExercisesResponse {
    total_results: number;
    exercises:     ExerciseElement[];
    code:          string;
    result:        string;
}

export interface ExerciseElement {
    exercise: ExerciseExercise;
}

export interface ExerciseExercise {
    exercise_id:    string;
    simulator_type: SimulatorType;
    exercise_type:  ExerciseType;
    name:           string;
    description:    null | string;
}

export enum ExerciseType {
    FreeExercise = "Free Exercise",
    TMExercise = "TM Exercise",
}

export enum SimulatorType {
    Autobus = "Autobus",
    Construsim = "Construsim",
    Liftsim = "Liftsim",
    LmvRg31 = "LMV-RG31",
    Logsim = "Logsim",
    Minesim = "Minesim",
    Mqbdz = "MQBDZ",
    Mqbl = "MQBL",
    Simesbike = "Simesbike",
    Simescar = "Simescar",
    Simestruck = "Simestruck",
    SnowPlow = "SnowPlow",
    The4X4 = "4x4",
}

export interface ExercisesState {
    exercisesInfo: ExercisesResponse | null;
    fetchExercises: () => Promise<void>;
}

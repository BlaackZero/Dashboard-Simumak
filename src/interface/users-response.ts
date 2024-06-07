export interface UsersResponse {
    total_results: number;
    users:         UserElement[];
    code:          string;
    result:        string;
}

export interface UserElement {
    user: UserUser;
}

export interface UserUser {
    member_id:       string;
    user_type:       UserType;
    user_id:         null;
    username:        string;
    name:            string;
    personal_number: null | string;
    codigo_usuario:  null | string;
}

export enum UserType {
    Alumno = "Alumno",
    Gestor = "Gestor",
    Instructor = "Instructor",
}

export interface Course {
    course_id: string;
    name: string;
}

export interface Session {
    session_id: string;
    date: string | null;
    simulator: string;
    final_calification: string | null;
}

export interface User {
    member_id: string;
    user_type: string;
    user_id: null;
    username: string;
    name: string;
    group: null;
    personal_number: string;
    codigo_usuario: string;
    creation_date: string;
    code: string;
    result: string;
    courses?: {
        course: Course;
    }[];
    sessions?: {
        session: Session;
    }[];
}


export interface UsersState {
    usersInfo: UsersResponse | null;
    fetchUsers: () => Promise<void>;
}

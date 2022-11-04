interface UserCredentials {
    email: string;
    password: string;
}

export const defaultCredentials: UserCredentials = {
    email: "",
    password: ""
}

export type {
    UserCredentials
}
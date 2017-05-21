export interface IClient {
    first: string;
    last: string;
    username: string;
    password: string;
    id?: string;
    skills?: ISkill[];
    avatar?: string;
    profile?: string;
}

export interface ISkill {
    name: string;
    level: number;
}

export interface ICredentials {
    username: string;
    password: string;
}

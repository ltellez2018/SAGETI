
export interface User {

firstName: string;
lastName: string;
name: string;
email: string;
key: string;
profile: 'Bussness Administrator' | 'System Administrator' | 'User' | 'Provider';
date?: Date;
id?: string;
}

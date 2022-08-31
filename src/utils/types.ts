export interface IUser {
  username: string;
  password: string;
}

export interface IUserSendData {
  grant_type: string,
  username: string,
  password: string,
  scope: string,
  client_id: string,
  client_secret: string,
}

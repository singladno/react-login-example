export type Action = {
  type: string;
  payload?: any;
};

export type User = string | null;

export interface State {
  user: User;
}

export enum userActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export const userReducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case userActions.LOGIN:
      return { user: payload };
    case userActions.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

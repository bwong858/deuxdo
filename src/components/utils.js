import { MANAGER } from './constants';

export const isManager = user =>
  user.role === MANAGER || (user.email && user.email.includes('manage'));

export const isAuthenticated = user => !!user.email;

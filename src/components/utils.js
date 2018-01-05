import { MANAGER } from './constants';

export const isManager = user => user.role === MANAGER || user.email.includes('manage');

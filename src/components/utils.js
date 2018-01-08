export const isManager = user => user.role === 'manager';
//|| (user.email && user.email.includes('manage'));

export const isAuthenticated = user => !!user.email;

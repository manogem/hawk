export const storage = {
  get: (key: string) => sessionStorage.getItem(key) || '',
  set: (key: string, value: string) => sessionStorage.setItem(key, value),

  getObject: (key: string) => JSON.parse(sessionStorage.getItem(key) || '{}'),
  setObject: (key: string, value: object) => sessionStorage.setItem(key, JSON.stringify(value)),

  delete: (key: string) => sessionStorage.removeItem(key),
};

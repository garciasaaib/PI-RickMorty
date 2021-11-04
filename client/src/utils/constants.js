export const BASE_URL = 'http://localhost:3001'
export const CHARACTER_URL = BASE_URL + '/character'
export const EPISODE_URL = BASE_URL + '/episode'
export const CHARACTER_BY_ID = (id) => `${CHARACTER_URL}/${id}`
export const CHARACTER_BY_NAME = (name) => `${CHARACTER_URL}?name=${name}`


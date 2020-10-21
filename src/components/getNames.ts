import Axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getNames = (): Promise<string[]> =>
  Axios.get(url).then(({ data }) => data.map((user: { name: any; }) => user.name));
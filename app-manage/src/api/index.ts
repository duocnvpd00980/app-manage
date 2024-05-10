import axios from "axios";

const instance = axios.create({
  baseURL: "https://663983fe1ae792804bec013c.mockapi.io/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  listen = (callback: (res: T) => void) => () =>
    instance.get<T>(this.endpoint).then((res) => {
      callback(res.data);
      //console.log('At>>>',res.data)
      return res.data;
    });

  insertOne = (payload: T) =>
    instance.post<T>(this.endpoint, payload).then((res) => res.data);
}

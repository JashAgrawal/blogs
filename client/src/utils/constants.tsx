export interface Iblogs {
  _id: string;
  title: string;
  body: string;
  author?: string;
  date?: string;
}

export const blogs: Iblogs[] = [
  {
    title: "Hi There",
    body: "sddfgdfhddgfsghgfasdgs",
    author: "abcd",
    _id: "1as",
  },
  {
    title: "Hi There",
    body: "sddfgdfhddgfsghgfasdgs",
    author: "abcd",
    _id: "fsaf",
  },
  {
    title: "Hi There",
    body: "sddfgdfhddgfsghgfasdgs",
    author: "abcd",
    _id: "dfad",
  },
  {
    title: "Hi There",
    body: "sddfgdfhddgfsghgfasdgs",
    author: "abcd",
    _id: "asggd",
  },
  {
    title: "Hi There",
    body: "sddfgdfhddgfsghgfasdgs",
    author: "abcd",
    _id: "asffa",
  },
];

export enum methods {
  post = "POST",
  get = "GET",
  patch = "PATCH",
  delete = "DELETE",
}

export enum amethods {
  post = "post",
  get = "get",
  patch = "patch",
  delete = "delete",
}

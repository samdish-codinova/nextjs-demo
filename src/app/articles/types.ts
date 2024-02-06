export interface Response {
  data: Data;
}

export interface Data {
  articleList: ArticleList;
}

export interface ArticleList {
  nodes: Node[];
  meta: Meta;
}

export interface Node {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  createdAt: string;
  avatar: string;
}

export interface Meta {
  limit: number;
  offset: number;
  total: number;
}

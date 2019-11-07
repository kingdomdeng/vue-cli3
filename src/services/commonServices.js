import apiFn from "@/plugins/axios.js";

const api = [
  {name: 'getArticleSet', method: 'post', url: '/homepage/getArticleSet'},
];

export default apiFn(api);

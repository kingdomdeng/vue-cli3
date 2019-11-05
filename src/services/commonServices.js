import apiFn from "@/plugins/axios.js";

const api = [
  {name: 'getArticleSet', method: 'post', url: '/api/homepage/getArticleSet'},
];

export default apiFn(api);
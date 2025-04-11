export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/www/docbansen/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/www/docbansen/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/bansen/hello.html", { loader: () => import(/* webpackChunkName: "bansen_hello.html" */"E:/www/docbansen/docs/.vuepress/.temp/pages/bansen/hello.html.js"), meta: {"title":"申请币安 API 密钥"} }],
  ["/bansen/help.html", { loader: () => import(/* webpackChunkName: "bansen_help.html" */"E:/www/docbansen/docs/.vuepress/.temp/pages/bansen/help.html.js"), meta: {"title":"新手入门"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/www/docbansen/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

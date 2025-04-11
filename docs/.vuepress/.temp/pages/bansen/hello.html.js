import comp from "E:/www/docbansen/docs/.vuepress/.temp/pages/bansen/hello.html.vue"
const data = JSON.parse("{\"path\":\"/bansen/hello.html\",\"title\":\"申请币安 API 密钥\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"bansen/hello.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

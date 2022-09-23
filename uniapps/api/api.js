import http from '../common/js/request.js'
async function getlist(){
  const {data} = await http.get('article/api/category/label/list')
  return data
}
async function datalist(msg){
  const {data} = await http.post('course/api/course/search',msg)
  return data
}
async function getaside(){
  const {data}=await http.get('article/api/category/label/list')
  return data
}
async function quesdatahot(){
  const {data} = await http.post('question/api/question/hot')
  return data
}
export {
  getlist,
  datalist,
  getaside,
  quesdatahot
}
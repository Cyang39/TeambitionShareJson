/**
 * 从请求中提取 url 的 path 部分
 * @param {*} event 腾讯 SCF 提供事件触发对象
 */
function str_path(event) {
  const pre_path = event.path
    ? event.path.split(event.requestContext.path)[1]
    : "";
  return (path = pre_path ? pre_path : "/");
}

/**
 * 从请求中提取 query string 的 password 部分
 * @param {*} event 腾讯 SCF 提供事件触发对象
 */
function str_pass(event) {
  const query = event.queryString;
  return query.password ? query.password : "";
}

/**
 * 从列表中提取 `.password` 文件的文件名部分
 * @param {*} files Teambition 获取 Works API 返回数组
 */
function pick_pass(files) {
  const passFile = files.find((file) => /^.+\.password$/.test(file.fileName));
  if(!passFile) return ""
  return passFile.fileName.split('.password')[0]
}

/**
 * 返回一个腾讯云 SCF 的响应对象（ 状态 `200` | 格式 `JSON` ）
 * @param {*} body JSON 格式字符串或者 JS 对象
 */
function res_200(body) {
  if (typeof body !== "string") {
    body = JSON.stringify(body);
  }
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  };
}

/**
 * 返回一个腾讯云 SCF 的响应对象（ 状态 `302` | **重定向** ）
 * @param {*} body JSON 格式字符串或者 JS 对象
 */
function res_302(url) {
  return {
    isBase64Encoded: false,
    statusCode: 302,
    headers: { Location: url },
  };
}

/**
 * 返回一个腾讯云 SCF 的响应对象（ 状态 `403` | 格式 `JSON` ）
 * @param {*} body JSON 格式字符串或者 JS 对象
 */
function res_403() {
  return {
    isBase64Encoded: false,
    statusCode: 403,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: '{"name":"Forbidden","message":"访问被拒绝"}',
  };
}

/**
 * 返回一个腾讯云 SCF 的响应对象（ 状态 `404` | 格式 `JSON` ）
 * @param {*} body JSON 格式字符串或者 JS 对象
 */
function res_404() {
  return {
    isBase64Encoded: false,
    statusCode: 404,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: '{"name":"NotFound","message":"项目不存在"}',
  };
}

/**
 * 返回一个腾讯云 SCF 的响应对象（ 状态 `500` | 格式 `JSON` ）
 * @param {*} body JSON 格式字符串或者 JS 对象
 */
function res_500() {
  return {
    isBase64Encoded: false,
    statusCode: 500,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: '{"name":"InternalServerError","message":"服务器内部错误"}',
  };
}

module.exports = {
  str_path,
  str_pass,
  pick_pass,
  res_200,
  res_302,
  res_403,
  res_404,
  res_500,
};

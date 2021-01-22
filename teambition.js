let my_fetch = typeof Deno === 'undefined' ? require("node-fetch") : fetch;

/**
 * 获取项目列表
 * @param string cookie teambitionCookie
 * @return array
 */
async function get_projects(cookie) {
  const api = "https://www.teambition.com/api/v2/projects?";
  const params = new URLSearchParams({
    _organizationId: "000000000000000000000405",
    selectBy: "joined",
    orderBy: "name",
    pageToken: "",
    pageSize: "20", // 目前只读取 20 个项目
  });
  const res = await my_fetch(api + params.toString(), { headers: { cookie } });
  return (await res.json()).result;
}

/**
 * 获取项目信息
 * @param string projectID 项目ID
 * @param string cookie teambitionCookie
 * @return array
 */
async function get_project(projectID, cookie) {
  const api = "https://www.teambition.com/api/projects/" + projectID;
  const result = await my_fetch(api, { headers: { cookie } });
  return await result.json();
}

/**
 * 获取文件夹下的文件夹
 * @param string dirid 文件夹ID
 * @param string cookie teambitionCookie
 * @return array
 */
async function get_dirs(
  dirId,
  cookie,
  count = 100,
  order = "updatedDesc",
  page = 1
) {
  const api = "https://www.teambition.com/api/collections?";
  const param = new URLSearchParams({
    _parentId: dirId,
    order: order,
    count: "" + count,
    page: "" + page,
  });
  const result = await my_fetch(api + param.toString(), { headers: { cookie } });
  return await result.json();
}

/**
 * 获取目录信息
 * @param string parentId 目录ID
 * @param string cookie teambitionCookie
 * @return Object
 */
async function get_dir(parentId, cookie) {
  const api = "https://www.teambition.com/api/collections/" + parentId;
  const result = await my_fetch(api, { headers: { cookie } });
  return await result.json();
}

/**
 * 获取文件夹下的文件
 * @param string dirid 文件夹ID
 * @param string cookie teambitionCookie
 * @param int page 页码
 * @return array
 */
async function get_files(
  dirId,
  cookie,
  count = 100,
  order = "updatedDesc",
  page = 1
) {
  const api = "https://www.teambition.com/api/works?";
  const param = new URLSearchParams({
    _parentId: dirId,
    order: order,
    count: "" + count,
    page: "" + page,
  });
  const result = await my_fetch(api + param.toString(), { headers: { cookie } });
  return await result.json();
}

/**
 * 获取文件信息
 * @param string parentId 文件ID
 * @param string cookie teambitionCookie
 * @return Object
 */
async function get_file(parentId, cookie) {
  const api = "https://www.teambition.com/api/works/" + parentId;
  const result = await my_fetch(api, { headers: { cookie } });
  const data = await result.json();
  if (data["downloadUrl"]) {
    return data;
  } else {
    return false;
  }
}

module.exports = {
  get_projects,
  get_project,
  get_dirs,
  get_dir,
  get_files,
  get_file,
};

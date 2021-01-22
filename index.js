const { cookie, root_password } = require("./config");
const u = require("./util");
const t = require("./teambition");
const f = require("./filter");

exports.main_handler = async (event, context, callback) => {
  const path = u.str_path(event);
  const pass = u.str_pass(event);
  try {
    if (path === "/") {
      // 根地址
      if (root_password && root_password !== pass) return u.res_403();
      const projects = await t.get_projects(cookie);
      const filtered_projects = projects.map(f.project);
      return u.res_200(filtered_projects);
    } else if (/^\/[0-9a-z]+$/.test(path)) {
      // 目录地址
      const dirId = path.split("/")[1];
      const files = await t.get_files(dirId, cookie);
      const dir_pass = u.pick_pass(files);
      if (dir_pass && dir_pass !== pass) return u.res_403();
      const dirs = await t.get_dirs(dirId, cookie);
      const filtered_files = files.map(f.file);
      const filtered_dirs = dirs.map(f.dir);
      const join = filtered_dirs.concat(filtered_files);
      return u.res_200(join);
    } else if (/^\/file\/[0-9a-z]+$/.test(path)) {
      // 文件地址
      const data = await t.get_file(path.split("/")[2], cookie);
      return u.res_302(data.downloadUrl);
    } else {
      // 其他地址
      return u.res_404();
    }
  } catch (error) {
    // 数据出错
    return u.res_500();
  }
};

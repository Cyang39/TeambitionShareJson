## 项目说明
挂载 Teambition 文件（ Json API Server )

本项目可以直接部署到腾讯云函数（Serverless Cloud Function，SCF），其他云提供商可根据对应说明自行修改

## API 说明
### /
显示项目列表，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan?password=123456)

### /<Collection ID> 
显示文件夹内列表，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan/600580d7acb0d8004a15f884)

### /file/<Work ID>
重定向到文件，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan/file/6007ba5a62036200447b2823)（直接点击此链接将下载一个文件）

## 参考项目
- [FlxSNX/TeambitionShare](https://github.com/FlxSNX/TeambitionShare)
- [Teambition项目直链解析平台，无限容量，无需内测，支持永久直链，列目录，目录加密](https://www.jianshu.com/p/af2f569abe83)

## 部署说明
1. 下载 / 克隆本项目
2. 在`config.js`中设置`cookie`和根地址密码（详见注释）
3. 在`filter.js`中设置 API 想要暴露的字段（详见注释）
4. 在腾讯云 SCF 选择 **Node.js** 运行时，上传项目目录
    - 腾讯云会根据 `package.json` 安装依赖，也可以安装后打包上传
5. 设置 API 网关（可开 CORS，可设置仅 GET 方法）和触发器
    - 若模板自动设置触发器，可跳过此步骤，在以后可进一步设置网关和触发器
    - 推荐选用 Node.js 静态网页模板，然后覆盖代码
6. 通过设置的网关即可访问 API

## 其他说明
- 目前不支持 Teambition 网盘，只支持项目文件;
- 目前未作分页，单文件夹内内容请不要超过`100`;
- 若 cookie 过期，可直接在线编辑更新并重新部署;
- 个人日常使用的话，腾讯云函数调用的免费额度基本够用;
- 可以选择最低的 64MB 内存的配置，实际每次调用仅 10+MB;
- API 绑定私有域名需要备案，但 github pages/coding pages 不需要，可以通过此 API 构建私有域名 SPA。

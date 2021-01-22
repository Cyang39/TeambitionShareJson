## 项目说明
挂载 Teambition 文件（ Json API Server/Serverless )

本项目可以直接部署到：
- 腾讯云函数（Serverless Cloud Function，SCF）：入口 `index.main_handler`
- 阿里云函数：入口 `index.handler`

## API 说明
```text
/
```
显示项目列表，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan?password=123456)

```text
/Collection_ID
```
显示文件夹内列表，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan/600580d7acb0d8004a15f884)

```text
/file/Work_ID
```
重定向到文件，[在线演示](https://service-5hj05gr1-1256971770.sh.apigw.tencentcs.com/release/pan/file/6007ba5a62036200447b2823)（直接点击此链接将下载一个文件）

## 参考项目
- [FlxSNX/TeambitionShare](https://github.com/FlxSNX/TeambitionShare)
- [Teambition项目直链解析平台，无限容量，无需内测，支持永久直链，列目录，目录加密](https://www.jianshu.com/p/af2f569abe83)

## 目录密码
- 项目列表密码在 `config.js` 中设置;
- 目录密码可在对应目录下创建一个 `.password` 文件，文件名为目录密码，例如`123456.password`;
- 访问带有密码的目录，需要 URL 参数 `passwrod`，例如`/?password=123456`。

## 部署说明
1. 下载 / 克隆本项目
2. 在`config.js`中设置`cookie`和根地址密码（详见代码文件注释）
3. 在`filter.js`中设置 API 想要暴露的字段（详见代码文件注释）
4. 在云函数控制面板选择 **Node.js** 运行时，上传项目目录
    - 腾讯云会根据 `package.json` 安装依赖，也可以安装后打包上传
    - 阿里云貌似不会安装依赖，建议本地安装后打包上传
5. 设置 API 网关（可开 CORS，可设置仅 GET 方法）触发器（HTTP触发器）
    - 若模板自动设置触发器，可跳过此步骤，在以后可进一步设置触发器
    - 推荐选用 Node.js 应用模板，然后覆盖代码
6. 通过设置的网关即可访问 API

## 其他说明
- 目前不支持 Teambition 网盘，只支持项目文件;
- 目前未作分页，单文件夹内内容请不要超过`100`项;
- 若 `cookie` 过期，可直接在线编辑更新并重新部署;
- 个人日常使用的话，腾讯云和阿里云的免费额度完全够用;
- 可以选择最低的 64MB 内存的配置（阿里云最低 128MB），实际每次调用仅 20MB;
- API 绑定私有域名需要备案，但 github/coding pages 不需要，因此可以通过此 API 构建私有域名 [SPA](https://github.com/rafgraph/spa-github-pages) 网盘;
- 如不绑定域名，阿里云函数会在响应头目强制添加`Content-Disposition: attachment`，即使返回`json`也会被下载，但对 API 使用无影响。

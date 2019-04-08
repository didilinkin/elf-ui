# elf-ui
Elf, a React based component library for developers; 基于React的桌面组件库


## 特点介绍
* 组件代码全部由 `Typescript` 编写, 支持类型检查
* 测试覆盖率 `100%`
* 支持 `国际化`, 支持自定义配置
* 最小的体积 最好的性能


## 与其他 UI组件库的差异
Elf 是个 很小的工具组件库

当前的需求是 放置一些工作中沉淀下来的工具组件

然后对其优化, 抽离业务代码, 使其具有通用性

很多常见的 UI组件暂时不是开发的重点


## Tips
本组件库可以配合 其他 UI组件库使用, 如: `AntD`等等


## 不适用的场景
* 本组件库只支持 `React`, 其他框架暂不支持
* 非 `Typescript`编写的项目 (虽然可以支持， 但是很多检查, 提示功能都将失去作用)


## TODO
- [x] 组件库架子 搭建
- [x] 测试 组件压缩体积
- [x] 测试 example 安装打包后的包
- [x] Github 库创建
- [x] npmjs 发包
- [x] 打包文档, 发布到 github线上
- [x] 文档页 优化
- [x] 文档页 美化, 添加代码着色
- [x] 文档页 优化
- [x] 项目 README 介绍优化
  - [x] 特点介绍
  - [x] 与其他 UI组件库的差异
  - [x] 不适用的场景
- [ ] precommit 配置
  - [ ] eslint 配置 (替换 tslint)
  - [ ] 强制检查 lint
  - [ ] 规范化 commit - Commitizen
- [ ] CI 配置 - travis
- [ ] 添加组件


## 组件库 `开发与维护` 参考文档
[docz 操作文档(英文)](https://www.docz.site/)

[umi-library 操作上手文档 - 渣渣灰手摸手带你开发一个组件库](https://github.com/clock157/blog/issues/1)

[umi-library - API 相关配置](https://github.com/umijs/umi/tree/master/packages/umi-library)


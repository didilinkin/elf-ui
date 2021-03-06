# elf-ui
Elf, a React based component library for developers; 基于React的桌面组件库

[![npm version](https://img.shields.io/npm/v/elf-ui.svg)](https://www.npmjs.com/package/elf-ui)
[![build status](https://img.shields.io/travis/didilinkin/elf-ui.svg?style=flat-square)](https://travis-ci.org/didilinkin/elf-ui)
[![install size](https://badgen.net/packagephobia/install/elf-ui)](https://packagephobia.now.sh/result?p=elf-ui)
[![languages](https://img.shields.io/github/languages/top/didilinkin/elf-ui.svg)](https://img.shields.io/github/languages/top/didilinkin/elf-ui.svg)
[![type](https://img.shields.io/npm/types/elf-ui.svg)](https://img.shields.io/npm/types/elf-ui.svg)
[![dependencies](https://img.shields.io/librariesio/github/didilinkin/elf-ui.svg)](https://img.shields.io/librariesio/github/didilinkin/elf-ui.svg)
[![branch](https://img.shields.io/github/commit-status/didilinkin/elf-ui/master/12ec7b76291174cd41d9c7e5c297c4b5f835ce6d.svg)](https://img.shields.io/github/commit-status/didilinkin/elf-ui/master/12ec7b76291174cd41d9c7e5c297c4b5f835ce6d.svg)
[![license](https://img.shields.io/npm/l/elf-ui.svg)](https://img.shields.io/npm/l/elf-ui.svg)
[![node version](https://img.shields.io/node/v/elf-ui.svg)](https://img.shields.io/node/v/elf-ui.svg)


[![stars](https://img.shields.io/github/stars/didilinkin/elf-ui.svg?style=social)](https://img.shields.io/github/stars/didilinkin/elf-ui.svg?style=social)

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

关于提交流程
```bash
# 添加更新内容
git add .

# 编写 commit 说明, 不要使用 `git commit -m "xxx"`
git cz

# 接下来根据 提示书写更新内容
```


## 不适用的场景
* 本组件库只支持 `React`, 其他框架暂不支持
* 非 `Typescript`编写的项目 (虽然可以支持， 但是很多检查, 提示功能都将失去作用)


## 依赖安装 (请使用 `yarn` 安装依赖)
```bash
# node -v
v10.7.0

# yarn -v
1.10.1

# 环境依赖
yarn global add conventional-changelog
yarn global add umi

# 初次安装会比较长时间, 请耐心等候
yarn install
```


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
- [x] 流程规范化 - git hook配置
  - [x] husky 功能
  - [x] lint-staged 功能
  - [x] eslint 配置 (替换 tslint)
  - [x] 强制检查 lint
  - [x] prettier 格式化
  - [x] 规范化 commit - Commitizen
- [ ] CI 配置 - travis
- [ ] 添加组件


## 组件库 `开发与维护` 参考文档
[docz 操作文档(英文)](https://www.docz.site/)

[umi-library 操作上手文档 - 渣渣灰手摸手带你开发一个组件库](https://github.com/clock157/blog/issues/1)

[umi-library - API 相关配置](https://github.com/umijs/umi/tree/master/packages/umi-library)


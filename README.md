# electron-react-template

一个非常简单的electron及react的模板

## 安装

```bash
git clone git@github.com:zqyadam/electron-react-template.git
cd electron-react-template
yarn
```

## 使用
```bash
yarn dev
```

## 依赖包

- [concurrently](https://www.npmjs.com/package/concurrently)
- [wait-on](https://www.npmjs.com/package/wait-on)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [electron-is-dev](https://www.npmjs.com/package/electron-is-dev)

## 注意事项
在`render process`中使用`window.require`代替`require`引入`nodejs`模块
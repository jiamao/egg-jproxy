# egg-jproxy

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-jproxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-jproxy
[download-image]: https://img.shields.io/npm/dm/egg-jproxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-jproxy

<!--
Description here.
-->

## Install

```bash
$ npm i egg-jproxy --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.jproxy = {
  enable: true,
  package: 'egg-jproxy',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
// 匹配请求 /jproxy/xx.cgi  指向127.0.0.1:8080，并带host：www.baidu.com
exports.jproxy = {
        ip: '127.0.0.1', // ipaddress  可选
        port: 8080,     // port  default:80 可选
        protocal: 'http', // http or https
        host:  'www.baidu.com',     // proxy domain
        match: /^\/jproxy\/(.*)\.(cgi|fcgi)/   // match  /jproxy/xxx.cgi
     };
```
也可以配置多个
```js
// {app_root}/config/config.default.js
exports.jproxy = [
    {
        ip: '127.0.0.1', // ipaddress  可选
        port: 8080,     // port  default:80 可选
        protocal: 'http', // http or https
        host:  'www.baidu.com',     // proxy domain
        match: /^\/jproxy\/(.*)\.(cgi|fcgi)/   // match  /jproxy/xxx.cgi
     },
     // 把请求指向 www.baidu.com
     {
        host:  'http://www.baidu.com',     // proxy domain 如果不填使用当前域名
        match: /^\/jproxy\/(.*)\.(cgi|fcgi)/   // match  /jproxy/xxx.cgi
     }
  ];
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

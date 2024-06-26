# node-gtag4

 A lightweight, browser api-free and Node.js version of the Google Analytics SDK, the data reporting is accepted by Google Analytics 4.
 The primary purpose of this SDK is to assist early-stage tool projects in collecting usage data and improving their products at a lower cost.

![](https://cdn.jsdelivr.net/gh/danni-cool/danni-cool@cdn/image/logo-nodeGtag.png)

 ![](https://img.shields.io/github/actions/workflow/status/danni-cool/node-gtag4/release.yml) ![](https://img.shields.io/npm/v/node-gtag4) ![](https://img.shields.io/npm/dw/node-gtag4)

node-gtag4 是一个功能精简，不依赖浏览器 API 的 Node 版本 Google Analytics SDK，数据可以上报 [Google Analytics 4](https://analytics.google.com/analytics/web/) 到并呈现在管理后台，此SDK初衷主要是为了帮助一些早期的工具项目以较低的成本收集使用数据并且改进自己的产品。

# Install

```bash
npm i node-gtag4
```

# Usage

```bash
const ga = require('node-gtag4')('G-xxxxxx')

// report pv
ga.pv('appFunction1')

// report event
ga.event({category: 'myCategory', action: 'customAction', label:'label', value: 1})

```

# Data Results

> - ⚠️ notice: ga4's report view is a delayed data which appeared after 24 hours, realtime view's data appeared in about 30s and stayed for 30 mins. (from my test)
> - ⚠️ 注意：ga4 的报告视图是有24小时延迟计算的数据，这意味着上报后，这块数据不会立即呈现,实时视图的数据在30s内会能看到结果，但是只保留30分钟。（经过我的测试）

data type | screenshot |
--- | --- |
data view (报告视图) | ![](https://cdn.jsdelivr.net/gh/danni-cool/danni-cool@cdn/image/ga-effect-screenshot.png) | 
realtime view (实时视图) | ![](https://cdn.jsdelivr.net/gh/danni-cool/danni-cool@cdn/image/ga-realtime-screenshot.png) | 

# Plan

[Details at issue](https://github.com/danni-cool/node-gtag4/issues/1)


# License

MIT



# Changelog


## 0.1.4 (2024-05-06)



## 0.1.3 (2024-02-28)



## 0.1.2 (2023-05-12)

### Bug Fixes

* 🐛 fix github action name conflict ([6a3f662](https://github.com/danni-cool/node-gtag/commit/6a3f662141ac4e875b05c24dca6f8acd98863405))



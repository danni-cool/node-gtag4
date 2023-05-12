# node-gtag

 A lightweight, browser api-free and Node.js version of the Google Analytics SDK, the data reporting is accepted by Google Analytics 4.
 The primary purpose of this SDK is to assist early-stage tool projects in collecting usage data and improving their products at a lower cost.

![](https://cdn.jsdelivr.net/gh/danni-cool/blog.danni.cool/cdn/image/logo-nodeGtag.png)


node-gtag 是一个功能精简，不依赖浏览器 API 的 Node 版本 Google Analytics SDK，数据可以上报 [Google Analytics 4](https://analytics.google.com/analytics/web/) 到并呈现在管理后台，此SDK初衷主要是为了帮助一些早期的工具项目以较低的成本收集使用数据并且改进自己的产品。

# Data Results

> - ⚠️ notice: ga4's report view is a delayed data which appeared after 24 hours, realtime view's data appeared in about 30s and stayed for 30 mins. (from my test)
> - ⚠️ 注意：ga4 的报告视图是有24小时延迟计算的数据，这意味着上报后，这块数据不会立即呈现,实时视图的数据在30s内会能看到结果，但是只保留30分钟。（经过我的测试）

type | screen shot |
--- | --- |
Data view (报告视图) | ![](https://cdn.jsdelivr.net/gh/danni-cool/blog.danni.cool/cdn/image/ga-effect-screenshot.png) | 
Realtime view (实时视图) | ![](https://cdn.jsdelivr.net/gh/danni-cool/blog.danni.cool/cdn/image/ga-realtime-screenshot.png) | 


# install

```bash
npm i node-gtag
```

# usage

```bash
const ga = require('node-gtag')('G-xxxxxx')

// report pv
ga.pv('appFunction1')

// report event
ga.event({category: 'myCategory', action: 'customAction', label:'label', value: 1})

```


# license

MIT

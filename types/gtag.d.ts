// params from system through nodejs
export type systemParamsType = {
  sid: string; // session Id 会话ID，用于识别特定用户会话。
  cid: string; // 客户ID，用于识别独特的用户。example:(1519029784.1612401582)
  ul: string; // 用户的语言。example:(zh-cn)
  _p: number; // 这个参数是一个随机生成的唯一数字，用于标识每个页面视图。您可以使用任何方法生成此数字 example:(1672319039)
  uap?: string; // 操作系统平台。
  uapv?: string; // 操作系统版本。
  uafvl?: string; // user-agent example: (Chromium%3B112.0.5615.137%7CGoogle%2520Chrome%3B112.0.5615.137%7CNot%253AA-Brand%3B99.0.0.0)
  uaa?: string; // 表示用户使用的设备架构 example:(arm)
  uab?: number; // 用户代理位数，指的是浏览器的位数。example:(64 or 32)
};

export type gtagCommonType = {
  v: number; // 版本号，现在版本是 2。
  tid: string; // Google Analytics追踪ID。G-xadfj123j
  en: string; // 事件名称
  sr: string; // 屏幕分辨率, example:(1400x900)
  _ee: number; // 如果为1，则表示将事件排除在跟踪之外。example:1
  uamb?: string | number; // User Agent Mobile Device Brand
  uam?: string; // 用户代理移动设备模式，指的是移动设备的模式。
  uaw?: number; // 用户代理窗口宽度，指的是客户端应用程序的窗口宽度。
  sct?: number; // 带有可选的数字参数，指定某个事件的计数值 。
  seg?: number; // 用户分段的数字值。
  _s: number; // 是否启用了https传输 example:1
  gtm?: string; // Google Tag Manager的ID。
};

export type pvParamsType = {
  dl: string; // 文档URL，即要追踪的页面URL。
  dt: string; // 文档标题，即要追踪的页面标题。
} & gtagCommonType &
  systemParamsType;

export type eventParamsType = {
  'ep.event_category': string;
  'ep.event_label': string;
  'ep.event_value': number;
} & gtagCommonType &
  systemParamsType;

export type pvPayloadType = {
  title?: string;
  tid: string;
  type: 'pv' | 'event';
  eventObj?:eventPayloadType
};

export type eventPayloadType = { category: string; action: string; label?: string; value: number }
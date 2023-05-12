export const GTAG_BASEURL = "https://www.google-analytics.com/g/collect"

export const DEFAULT_AXIOS_HEADER = {
  authority: 'www.google-analytics.com',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-dest': 'dest',
  'pragma': 'no-cache',
  'cache-control': 'no-cache',
  // 'sec-ch-ua-platform': "macOS",
  // 'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  // important! ga don't catch the event when us is missing
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}

export const DEFAULT_AXIOS_PARAMS = {
  v: 2,
  _ee: 1,
  _s: 1,
  sr: '1400 x 900',
  seg:1, // ga consider this into a user count
}
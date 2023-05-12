import os from 'os';
import { machineIdSync } from 'node-machine-id';
import { systemParamsType } from '../types/gtag';
import { osLocaleSync } from './lib/os-locale/index';
import { DEFAULT_AXIOS_PARAMS } from './config';
import { pvParamsType, eventParamsType,eventPayloadType } from '../types/gtag';

export const getSidAndSet2Session = (): string => {
  const sid = (Math.random() * 10000000000).toString();
  /** global data */
  process.env['GTAG_SID'] = sid;

  return sid;
};

const getSystemParams = (): systemParamsType => {
  return {
    cid: machineIdSync(),
    sid: process.env['GTAG_SID'] || getSidAndSet2Session(),
    ul: osLocaleSync().toLowerCase(),
    uap: os.platform(),
    uafvl: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
    uaa: os.arch(),
    _p: Date.now()
  };
};

export const getPvParams = (tid: string, title: string): pvParamsType => ({
  ...DEFAULT_AXIOS_PARAMS,
  ...getSystemParams(),
  tid,
  dl: '',
  dt: title,
  en: 'page_view',
});

export const getEventParams = (
  tid: string,
  eventObj: eventPayloadType
): eventParamsType => ({
  ...DEFAULT_AXIOS_PARAMS,
  ...getSystemParams(),
  tid,
  'ep.event_category': eventObj.category,
  'ep.event_label': eventObj.label,
  'ep.event_value': eventObj.value,
  en: eventObj.action,
});

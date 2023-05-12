import axios from 'axios';
import { GTAG_BASEURL } from './config';
import { pvPayloadType, eventPayloadType } from '../types/gtag';
import { AxiosRequestConfig } from 'axios';
import { DEFAULT_AXIOS_HEADER } from './config';
import { getPvParams, getEventParams } from './utils';
export const gtagHandle = async ({
  type,
  title,
  tid,
  eventObj
}: pvPayloadType): Promise<void> => {
  // console.log(params.sid, params.cid, params._p)

  const config: AxiosRequestConfig = {
    params: type === 'pv' ? getPvParams(tid, title) : getEventParams(tid, eventObj),
    headers: {
      ...DEFAULT_AXIOS_HEADER,
      referer: '',
      origin: '',
    },
  };

  axios
    .post(GTAG_BASEURL, null, config)
    .then((response) => {
      // console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

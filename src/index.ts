import { gtagHandle } from './gtagHandle'
import { eventPayloadType } from '../types/gtag';

export default function nodeGtag4(trancingTag:string) {
  return {
    pv: (title:string) => gtagHandle({title, type:'pv', tid:trancingTag}),
    event: (eventObj:eventPayloadType) => gtagHandle({type:'event', tid:trancingTag, eventObj})
  }
}

/** not recommend but compatible */
module.exports = nodeGtag4
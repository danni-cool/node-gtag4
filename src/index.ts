import { gtagHandle } from './gtagHandle'
import { eventPayloadType } from '../types/gtag';

export default function nodeGtag4(trancingTag:string) {
  return {
    pv: (title:string) => gtagHandle({title, type:'pv', tid:trancingTag}),
    event: (eventObj:eventPayloadType) => gtagHandle({type:'event', tid:trancingTag, eventObj})
  }
}


const ga = nodeGtag4('G-LPT0Y85B0J')
ga.pv('appFunction1')
ga.event({category: 'myCategory', action: 'customAction', label:'label', value: 1})
/** not recommend but compatible */
module.exports = nodeGtag4


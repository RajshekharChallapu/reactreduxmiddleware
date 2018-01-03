

import {FETCH_WEATHER} from '../actions/index';

export default function (state=[], action){
    if(typeof state==='undefined'){
        return 0
    }
   switch (action.type){
case FETCH_WEATHER:

return [action.payload.data, ...state];
   }
    
    return state;
}
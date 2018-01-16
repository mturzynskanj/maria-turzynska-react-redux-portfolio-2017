
import {SET_PAGE_NAME} from './actionType'

export const pageName = (pageName)=>{
    return {
        type:SET_PAGE_NAME,
        pageName:pageName
    }
}
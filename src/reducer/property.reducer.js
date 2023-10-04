import { propertyConstants, singlePropertyConstants } from "../action/constants";

const initialState = {
    properties:[],
    loading:false,
    error:null,
    totalCount:0,
}

export default (state = initialState,action) => {
    console.log(action);
    switch(action.type){
        case propertyConstants.GET_PROPERTY_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case propertyConstants.GET_PROPERTY_SUCCESS:
            state = {
                ...state,
                properties:action.payload.dataList,
                totalCount:action.payload.totalCount,
                loading:false
            }
            break;
        case propertyConstants.GET_PROPERTY_FAILURE:
            state = {
                ...initialState,
                error:action.payload.error
            }
            break;
        case singlePropertyConstants.SINGLE_PROPERTY_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case singlePropertyConstants.SINGLE_PROPERTY_SUCCESS:
            state = {
                ...state,
                properties:action.payload.data,
                loading:false
            }
            break;
        case singlePropertyConstants.SINGLE_PROPERTY_FAILURE:
            state = {
                ...initialState
            }
        default:
            break;
    }
    return state;
}
import axiosInstance from "../helpers/api";
import { propertyConstants, singlePropertyConstants } from "./constants";

export const getProperty = (page = 1, limit = 6) => {
    return async(dispatch) => {
        dispatch({type:propertyConstants.GET_PROPERTY_REQUEST});
        try {
            const res = await axiosInstance.get('/propertyData',{
                params:{
                    _page:page,
                    _limit:limit
                }
            });
            if(res.status === 200){
                const totalCount = res.headers.get('x-total-count');
                const dataList = res.data;
                dispatch({
                    type:propertyConstants.GET_PROPERTY_SUCCESS,
                    payload:{
                        totalCount,dataList
                    }
                })
            }else{
                dispatch({
                    type:propertyConstants.GET_PROPERTY_FAILURE,
                    payload:{
                        error:'Unable to fetch Data'
                    }
                });
            }
        } catch (error) {
            dispatch({
                type:propertyConstants.GET_PROPERTY_FAILURE,
                payload:{
                    error:error
                }
            });
        }
    }
}

export const singleProperty = (id) => {
    return async(dispatch) => {
        dispatch({type:singlePropertyConstants.SINGLE_PROPERTY_REQUEST})
        try {
            const res = await axiosInstance.get('/propertyData',{
                params:{
                    id : id
                }
            });

            if(res.status === 200){
                const data = res.data;
                dispatch({
                    type:singlePropertyConstants.SINGLE_PROPERTY_SUCCESS,
                    payload:{data}
                })
            }else{
                dispatch({
                    type:singlePropertyConstants.SINGLE_PROPERTY_FAILURE,
                    payload:{error:'Cannot fetct Data'}
                })
            }
        } catch (error) {
            dispatch({
                type:singlePropertyConstants.SINGLE_PROPERTY_FAILURE,
                payload:{error:error}
            })
        }
    }
}
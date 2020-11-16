import {ADD_TO_CART,CARD_MINI_DETAIL,CARD_COMPLETE_DETAIL ,REMOVE_CARD,CHANGE_QUANTITY_VALUE} from './types';


export const addToCart=(val)=>{
  
    return {
        type:ADD_TO_CART,
        payload:true,
        val
    }
}
export const cardMiniDetail=(card,name,price)=>{
    return{
        type:CARD_MINI_DETAIL,
        card,
        name,
        price
    }

}
export const cardCompleteDetail=(val,quantity)=>{
    
    return{
        type:CARD_COMPLETE_DETAIL,
        val,
        quantity
    }

}
export const removeCard=(cardName)=>{
 
    console.log('actions is called')

    return{
        type:REMOVE_CARD,
        cardName

    }

}
export const changeQuantityValue=(cardName,enhancer)=>{
  
    return{
        type:CHANGE_QUANTITY_VALUE,
        cardName,
        enhancer
    }

}

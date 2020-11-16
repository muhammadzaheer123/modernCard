
import {ADD_TO_CART,CARD_MINI_DETAIL,CARD_COMPLETE_DETAIL ,REMOVE_CARD,CHANGE_QUANTITY_VALUE} from '../Action/types';
const INITIAL_STATE = {
  add_cart:false,
  card_n:'',
  card_t:'',
  card_p:'',
  card_gt:0,
  
  no_of_cards:1,
  card_key:1,
  items:[]


  };
  
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_CART:         
           return{...state,add_cart:true,no_of_cards:action.val}
        case CARD_MINI_DETAIL:
         
            
           
            console.log('_________________',state.items)
            return{...state,card_n:action.name,card_t:action.card,card_p:action.price}
            case CARD_COMPLETE_DETAIL:
              var check=false;
              
              var gt=0;
            
              
              state.items.map(item=>{
                if(item.card_name==state.card_n){
                  item.card_quantity=action.quantity;
                  item.card_total=(state.card_p*action.quantity)

                  check=true;
                }
              })
              if(!check){
              state.items.push({card_type:state.card_t,card_name:state.card_n,card_quantity:action.quantity,card_price:state.card_p,card_total:(state.card_p*action.quantity)})
              gt=gt+action.val;
            }
              check=false;
            state.items.map(item=>{
              gt=gt+item.card_total;
            })
        
              return{...state,card_gt:gt}
        case CHANGE_QUANTITY_VALUE:
          var gt=0;
          const newArray = [...state.items];
     console.log(newArray)
     newArray.map(item=>{
            if(item.card_name==action.cardName){
              console.log('plus')
              if(action.enhancer=='plus'){
              item.card_quantity=item.card_quantity+1;
              item.card_total=(item.card_quantity*item.card_price);
            
            
             
              }
              else {
                console.log('minus')
                if(item.card_quantity>1){
                  item.card_quantity=item.card_quantity-1;
                  item.card_total=(item.card_quantity*item.card_price);

                }
                else{
                  console.log('nothing')

                }
              }
            }
          })
          // console.log('tttttt',t)
          state.items.map(item=>{
            gt=gt+item.card_total;
          })
          return{...state,items:newArray,card_gt:gt}

        case REMOVE_CARD:
          var gt=0;
           var nArray=[...state.items];
           nArray=nArray.filter(item=>item.card_name!=action.cardName);
         var r=nArray.map(item=>{
           gt=gt+item.card_total;
           return gt;
          })
          console.log('grand total',r)
            return{...state,items:nArray,card_gt:r}
        default:
           return state;
}
}
import { createSlice } from "@reduxjs/toolkit";
import { cardList, shuffle } from "../contentList";

export const CardSlice=createSlice({
    name:'cards',
    initialState:{
        cards:cardList,
        selected:'',
        selectedId:0,
        totalSelect:0,
        point:200
    },
    reducers:{
        select:(state,action)=>{
            state.cards[action.payload.id].isOpen=true;
            if(state.selected===''){
                state.selected=action.payload.name;
                state.selectedId=action.payload.id;
                state.totalSelect=1;
            }else state.totalSelect=2;
        },
        compare:(state,action)=>{
            if(state.selected===action.payload.name){
                state.cards[state.selectedId].isFind=true;
                state.cards[action.payload.id].isFind=true;
                state.point+=50;
            }else{
                state.cards[state.selectedId].isOpen=false;
                state.cards[action.payload.id].isOpen=false;
                state.point-=state.point>0?10:0;
            }
            state.totalSelect=0;
            state.selected='';
            state.selectedId=0;
        },
        close:(state,action)=>{
            state.cards[action.payload].isOpen=false;
            state.selected='';
            state.selectedId=0;
            state.point-=state.point>0?10:0;
        },
        closeAll:(state)=>{
            state.cards.map(c=>{
                c.isOpen=false;
                c.isFind=false;
            })
        },
        reload: (state)=>{
            state.selectedId=0;
            state.selected='';
            let list=shuffle([...state.cards]);
            state.cards=list;
            state.point=200;
        }
    }
})
export const { select,compare,close,reload,closeAll} = CardSlice.actions

export default CardSlice.reducer
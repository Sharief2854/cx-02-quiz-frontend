import { createSlice } from "@reduxjs/toolkit";

let trainerSlice=createSlice({
    name:"trainer",
    initialState:{
        trainers:[]
    },
    reducers:{
            setData:function(state,action){
                state.trainers=action.payload;
            },
            deleteTrainer:function(state,action){
                let id=action.payload;
                state.trainers=state.trainers.filter((item)=>{
                    if(item._id==id){
                        return false;
                    }
                    return true;
                }); 
            },
            addTrainer:function(state,action){
                state.trainers.push(action.payload);
            }
    }
});

const {setData,deleteTrainer,addTrainer}=trainerSlice.actions;

export {setData,deleteTrainer,addTrainer};
export default trainerSlice;
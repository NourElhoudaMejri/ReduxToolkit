//DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



//define object
interface counterState {
    value: number;
}

//define initial state
const initialState: counterState = {
    value: 10,
};

const counterSlice = createSlice({
    name: 'counter',
    //initial state that reducer will used

    initialState,
    // object to define different types of logic and updates that we gone have inside this reducer 
    reducers:{
        //increment
        incremented(state){
            state.value++;
        },
        ammountAdded(state, action: PayloadAction<number>){
         state.value+= action.payload
        },

        //decrement
        //reset

    }
});
 export const {incremented, ammountAdded} =counterSlice.actions;
 export default counterSlice.reducer;
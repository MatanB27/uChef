import { PayloadAction, createSlice } from '@reduxjs/toolkit';

let Slices: any[] = [];
let dataReducers: any = {};
let dataActions: any = {};

/*----------------------------------------------------------------*/

export const gdSlice = createSlice({
    name: 'gd',
    initialState: false,
    reducers: {
        setGD: (state, action) => action.payload,
    },
});

Slices.push(gdSlice);

/*----------------------------------------------------------------*/

export const popupSlice = createSlice({
    name: 'popup',
    initialState: [],
    reducers: {
        addPopup: (state: object[], action: PayloadAction<object>) => {
            state.push(action.payload)
        },
        removePopup:(state: object[]) => {
            state.pop()
        }
  
    },
});

Slices.push(popupSlice);

/*----------------------------------------------------------------*/

for (const Slice of Slices) {
    dataActions = {...dataActions, ...Slice.actions};
    let reducer = {[Slice.name]: Slice.reducer};
    dataReducers = {...dataReducers, ...reducer};
}

export {dataActions, dataReducers};
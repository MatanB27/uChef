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
    initialState: false,
    reducers: {
        setPopup: (state: boolean, action: PayloadAction<boolean>) => action.payload,
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
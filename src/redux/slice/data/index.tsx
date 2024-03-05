import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

let Slices: any[] = [];
let dataReducers = {};
let dataActions = {};

/*----------------------------------------------------------------*/

export const gdSlice = createSlice({
    name: 'generalData',
    initialState: false,
    reducers: {
        setGeneralData: (state, action) => action.payload,
    },
});

Slices.push(gdSlice);

/*----------------------------------------------------------------*/

for (const Slice of Slices) {
    dataActions = {...dataActions, ...Slice.actions};
    let reducer = {[Slice.name]: Slice.reducer};
    dataReducers = {...dataReducers, ...reducer};
}

export {dataActions, dataReducers};
import { dataReducers } from "@/redux/slice/data";

let Reducers: any = {};

for (let reducer in dataReducers) {
    Reducers[reducer] = (dataReducers as any)[reducer]
}

export default Reducers;
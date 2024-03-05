// Add more if needed
import { dataActions } from "@/redux/slice/data";

type CombinedActions = typeof dataActions;

const Actions: CombinedActions = {
    ...dataActions,
}

export default Actions;
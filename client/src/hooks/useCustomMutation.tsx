import Actions from "@/redux/actions";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

type MutationFn = (data: any) => Promise<any>;
type OnSuccessFn = (data: any) => void;
type onErrorFn = (data: any) => void;

const useCustomMutation = (
        mutationFn: MutationFn,
        onSuccess: OnSuccessFn,
        onErrorFn?: onErrorFn
    ) => {

    const dispatch = useDispatch()    

    const defaultOnError = (e: Error) => {
        //TODO: add normal data to the popup
        const errorMessage = e.message;
        console.log(errorMessage);
        dispatch(Actions.addPopup({sdfsa: 'sdf'}));
      };

      return useMutation({
        mutationFn,
        onSuccess,
        onError: onErrorFn ? onErrorFn : (e) => defaultOnError(e)
      })
}

export default useCustomMutation
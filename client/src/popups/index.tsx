import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Actions from '@/redux/actions'

interface PopupProps<T> {
    data: T, //TODO: add specific data (like text, subText, button text... etc...)
    type: string,
}

export function Popup<T>(props: PopupProps<T>) {
    
    const {
        type = 'basic',
        data,
    } = props

    const popup = useSelector((store: any) => store.popup)
    const dispatch = useDispatch()
    
    const open = () => {
        dispatch(Actions.popup(false))
    }   
    
    const close = () => {
        dispatch(Actions.popup(false))
    }

    if(!popup) { return <></>}
    return (
        <div className={styles['popup']}>
            Check here for popup
        </div>
    )
}
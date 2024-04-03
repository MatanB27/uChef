import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Actions from '@/redux/actions'


interface PopupProps<T> {
    data: T,
    children: React.ReactNode,
    type: string,
}

export function Popup<T>(props: PopupProps<T>) {
    
    const {
        type = 'basic',
        data,
        children,
    } = props

    const dispatch = useDispatch()
    // const popup = useSelector(store => store.popup)
    // console.log('popup: ', popup);
    
    const open = () => {
        // dispatch(Actions.popup(false))
    }   
    
    const close = () => {
        // dispatch(Actions.popup(false))
    }

    return (
        <div className={styles['popup']}>
            Check here for popup
        </div>
    )
}
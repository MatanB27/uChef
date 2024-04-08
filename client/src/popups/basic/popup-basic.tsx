import { useDispatch } from 'react-redux';
import styles from './popup-basic.module.scss'
import Actions from '@/redux/actions';

type PopupBasicProps<T> = {
    data: T
}

export function PopupBasic<T>(props: PopupBasicProps<T>) {
    const {
        data
    } = props

    console.log('popup basic data: ', data);
    const dispatch = useDispatch()
    const openPopup = () => {
        dispatch(Actions.addPopup({sdfsa: 'asdsada'}))
    }
    return (
        <div className={styles['popup-basic']}>
            <button onClick={openPopup}>Click me!</button>        
        </div>
    )
}
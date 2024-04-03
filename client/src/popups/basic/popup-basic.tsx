import styles from './popup-basic.module.scss'

type PopupBasicProps<T> = {
    data: T
}

export function PopupBasic<T>(props: PopupBasicProps<T>) {

    return (
        <div className={styles['popup-basic']}>
            
        </div>
    )
}
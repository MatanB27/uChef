import { MouseEventHandler } from 'react'
import styles from './sidebar..module.scss'
import clsx from 'clsx'

type SideBarProps = {
    isOpen: boolean,
    closeSideBar: MouseEventHandler<HTMLButtonElement>,
}

export default function SideBar(props: SideBarProps) {
    const {
        isOpen = false,
        closeSideBar = () => {}
    } = props

    return (
        <>
            
            <button className={clsx(styles['bg-layout'], isOpen ? styles['is-open'] : '')} onClick={closeSideBar}/>
        </>
    )
}

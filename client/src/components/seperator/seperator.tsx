import clsx from "clsx"
import styles from './separator.module.scss';

type SeperatorProps = {
    className?: string,
    width?: number,
    isActive?: boolean
}

export default function Seperator(props : SeperatorProps) {

    const {
        width = 100,
        isActive = true,
        className = ''
    } = props

    const widthStyle = width + '%' 
    const SeperatorStyle = {
        width: widthStyle,
    }

    if(!isActive) {
        return <></>
    }
    
    return (
        <div className={clsx(className, styles['separator'])}style={SeperatorStyle}/>
    )
}
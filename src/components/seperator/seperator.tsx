
type SeperatorProps = {
    width?: number,
    isActive?: boolean
}

export default function Seperator(props : SeperatorProps) {

    const {
        width = 100,
        isActive = true
    } = props

    const widthStyle = width + '%' 
    const SeperatorStyle = {
        backgroundColor: 'black',
        height: '1px',
        width: widthStyle,
        opacity: .2
    }

    if(!isActive) {
        return <></>
    }
    
    return (
        <div style={SeperatorStyle}/>
    )
}
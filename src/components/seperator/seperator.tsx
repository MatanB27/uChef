
type SeperatorProps = {
    width?: number,
}

export default function Seperator(props : SeperatorProps) {

    const {
        width = 100,
    } = props

    const widthStyle = width + '%' 
    const SeperatorStyle = {
        backgroundColor: 'black',
        height: '1px',
        width: widthStyle,
        opacity: .2
    }
    return (
        <div style={SeperatorStyle}/>
    )
}
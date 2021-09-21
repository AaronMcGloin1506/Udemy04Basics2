import React from 'react'

const styles = {
    background:'lightgrey'
}

const Card = (props) => {
    return(
        <div style={styles}>
            {props.children}
        </div>
    )
    
}
export default Card;
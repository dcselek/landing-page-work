import React from 'react'
import cn from 'classnames'

import styles from './cont-frames.module.css'
import Screen1 from '../../../public/screen1'


function ContFrames () {
    return(
        <div className={cn(styles.contFrames)}>
            <Screen1 className={cn(styles.screen1)}></Screen1>
        </div>
    )
}

export default ContFrames
import React from 'react'
import { motion } from 'framer-motion'

const loadingContainer = {
    width: '40px',
    height: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto'
};

const loadingCircle = {
    display: 'block',
    width: '8px',
    height: '8px',
    backgroundColor: 'white',
    borderRadius: '50px'
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const loadingCircleVariants:any = {
    start: {
        y: '0%'
    },
    end : {
        y: '100%'
    }
};

const loadingCircleTransition:any = {
    duration: 0.4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
};

function ThreeDotsWave() {
    return (
        <motion.div style={loadingContainer} variants={loadingContainerVariants} initial='start' animate='end'>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}> </motion.span>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
        </motion.div>
    )
}

export default ThreeDotsWave

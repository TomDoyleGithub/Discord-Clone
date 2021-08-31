import { INCREMENT, DECREMENT } from './counter.types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};
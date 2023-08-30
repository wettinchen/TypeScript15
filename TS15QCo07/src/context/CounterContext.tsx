import { createContext, useReducer, ChangeEvent, Children, ReactElement, useState } from "react"

type StateType = {
    count: number
    text: string
}

const initState: StateType = { count: 0, text: "" }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? "" }
        default:
            throw new Error();
    }
}

const useCounterContext = (initState: StateType) => {

    const [state, dispatch] = useReducer(reducer, initState)
    
    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })

    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })

    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: event.target.value
        })
    }

    return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (event: ChangeEvent<HTMLInputElement>) => { }
}

export const CounterContext = createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | undefined
}

export const CounterProvider = ({
    children, ...initState
}: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}
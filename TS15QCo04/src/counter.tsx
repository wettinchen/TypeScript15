import { ChangeEvent, ReactNode, useReducer } from "react"

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT,
        payload: event.target.value
    })

    return (
        <>
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input
                type="text"
                onChange={handleTextInput}
            />
            <h2>{state.text}</h2>
        </>
    )
}

export default Counter
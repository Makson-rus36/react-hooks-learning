import { useReducer } from 'react'

type State = { count: number; step: number }

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; payload: number }
  | { type: 'reset' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
    case 'setStep':
      return { ...state, step: action.payload }
    case 'reset':
      return { count: 0, step: 1 }
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })

  return (
    <div className="card">
      <h3>Сложная логика состояния</h3>
      <p>
        <strong>Зачем:</strong> централизовать transitions состояния, когда
        useState разрастается или логика повторяется.
      </p>
      <p>
        Count: {state.count} (step {state.step})
      </p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <hr />
      <input
        type="number"
        value={state.step}
        onChange={(e) =>
          dispatch({ type: 'setStep', payload: Number(e.target.value) || 1 })
        }
      />
    </div>
  )
}

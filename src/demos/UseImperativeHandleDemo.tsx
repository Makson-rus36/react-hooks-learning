import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

type ChildApi = {
  reset: () => void
  focus: () => void
}

const CustomInput = forwardRef<ChildApi>(function CustomInput(_props, ref) {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    reset: () => setText(''),
    focus: () => inputRef.current?.focus(),
  }))

  return (
    <input
      ref={inputRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Контролируемый input"
    />
  )
})

export default function UseImperativeHandleDemo() {
  const childRef = useRef<ChildApi>(null)

  return (
    <div className="card">
      <h3>Кастомный ref-API</h3>
      <p>
        <strong>Зачем:</strong> ограничивать, что родитель может делать с
        дочерним компонентом через ref, предоставляя только нужные методы.
      </p>
      <CustomInput ref={childRef} />
      <button onClick={() => childRef.current?.focus()}>Фокус</button>
      <button onClick={() => childRef.current?.reset()}>Сбросить</button>
    </div>
  )
}

import { useState } from 'react'

export default function UseStateDemo() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div className="card">
      <h3>Локальное состояние</h3>
      <p>
        <strong>Зачем:</strong> хранить данные, которые влияют на отрисовку, и
        перерисовывать компонент при их изменении.
      </p>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
      <hr />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <p>Вы ввели: {text || '...'}</p>
    </div>
  )
}

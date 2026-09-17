import { useEffect, useRef, useState } from 'react'

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null)
  const renderCount = useRef(0)
  const [text, setText] = useState('')

  useEffect(() => {
    renderCount.current += 1
  })

  return (
    <div className="card">
      <h3>Ссылки и мутабельные значения</h3>
      <p>
        <strong>Зачем:</strong> хранить значения без перерисовки и получать
        прямые ссылки на DOM-элементы.
      </p>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={() => inputRef.current?.focus()}>Фокус</button>
      <p>Количество рендеров: {renderCount.current}</p>
      <p className="note">
        renderCount не вызывает перерисовку при изменении, потому что useRef не
        триггерит рендер.
      </p>
    </div>
  )
}

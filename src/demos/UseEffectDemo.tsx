import { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage(`Эффект сработал при count=${count}`)
    const id = setTimeout(() => setMessage(''), 1200)
    return () => clearTimeout(id)
  }, [count])

  return (
    <div className="card">
      <h3>Побочные эффекты</h3>
      <p>
        <strong>Зачем:</strong> синхронизация компонента с внешними системами
        (DOM, API, таймеры, подписки).
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Увеличить</button>
      <p className="note">{message}</p>
    </div>
  )
}

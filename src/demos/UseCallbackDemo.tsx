import { memo, useCallback, useState } from 'react'

const ExpensiveChild = memo(function ExpensiveChild({
  onClick,
}: {
  onClick: () => void
}) {
  console.log('render ExpensiveChild')
  return <button onClick={onClick}>Кнопка из memo-компонента</button>
})

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('React')

  const stableClick = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const namedClick = useCallback(() => {
    alert(`Привет, ${name}`)
  }, [name])

  return (
    <div className="card">
      <h3>Кэширование функций</h3>
      <p>
        <strong>Зачем:</strong> предотвращать лишние рендеры у детей, которым
        передают обработчики и которые зависят от равенства ссылок.
      </p>
      <p>Счётчик: {count}</p>
      <ExpensiveChild onClick={stableClick} />
      <hr />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
      />
      <ExpensiveChild onClick={namedClick} />
      <p className="note">
        Открой консоль: при изменении имени не происходит перерисовки
        memo-компонента с <code>stableClick</code>.
      </p>
    </div>
  )
}

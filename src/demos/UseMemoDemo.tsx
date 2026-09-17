import { useMemo, useState } from 'react'

export default function UseMemoDemo() {
  const [n, setN] = useState(20)
  const [color, setColor] = useState('#aa3bff')

  const fib = useMemo(() => {
    const calc = (x: number): number => (x < 2 ? x : calc(x - 1) + calc(x - 2))
    return calc(n)
  }, [n])

  return (
    <div className="card">
      <h3>Кэширование вычислений</h3>
      <p>
        <strong>Зачем:</strong> не пересчитывать дорогие значения, пока
        зависимости не изменились.
      </p>
      <input
        type="number"
        value={n}
        min={1}
        max={35}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <p>
        Fib({n}) = <strong>{fib}</strong>
      </p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p className="note">
        Изменение цвета не пересчитывает fib благодаря useMemo.
      </p>
    </div>
  )
}

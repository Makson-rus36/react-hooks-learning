import { useState, useTransition } from 'react'

const ITEMS = Array.from({ length: 12 }, (_, i) => `Category ${i + 1}`)

function SlowResults({ filter }: { filter: string }) {
  return (
    <ul>
      {ITEMS.filter((item) =>
        item.toLowerCase().includes(filter.toLowerCase())
      ).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function UseTransitionDemo() {
  const [filter, setFilter] = useState('')
  const [displayed, setDisplayed] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (value: string) => {
    setFilter(value)
    startTransition(() => {
      setDisplayed(value)
    })
  }

  return (
    <div className="card">
      <h3>Не-блокирующее обновление</h3>
      <p>
        <strong>Зачем:</strong> пометить обновление как переход, чтобы
        приоритетные интеракции (ввод, клики) не застревали.
      </p>
      <input
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Фильтр"
      />
      {isPending && <p className="note">Загрузка…</p>}
      <SlowResults filter={displayed} />
    </div>
  )
}

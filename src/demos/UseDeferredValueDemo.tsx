import { useDeferredValue, useMemo, useState } from 'react'

function SlowList({ query }: { query: string }) {
  const deferred = useDeferredValue(query)
  const items = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        name: `Item ${i} — ${deferred}`,
      })).filter((_, i) => i % 3 === 0),
    [deferred]
  )

  return (
    <ul style={{ maxHeight: 160, overflow: 'auto' }}>
      {items.map((it, i) => (
        <li key={i}>{it.name}</li>
      ))}
    </ul>
  )
}

export default function UseDeferredValueDemo() {
  const [query, setQuery] = useState('')

  return (
    <div className="card">
      <h3>Отложенное значение</h3>
      <p>
        <strong>Зачем:</strong> не тормозить ввод пользователя, пока
        «тяжёлый» список пересчитывается с опозданием.
      </p>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Фильтруй список"
      />
      <SlowList query={query} />
    </div>
  )
}

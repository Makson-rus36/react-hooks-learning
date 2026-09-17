import { useSyncExternalStore } from 'react'

const store = {
  value: 0,
  listeners: new Set<() => void>(),
  getSnapshot: () => store.value,
  subscribe: (cb: () => void) => {
    store.listeners.add(cb)
    return () => store.listeners.delete(cb)
  },
  increment: () => {
    store.value += 1
    store.listeners.forEach((cb) => cb())
  },
}

function Counter() {
  const count = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    () => 0 // SSR snapshot
  )

  return (
    <div>
      <p>Внешнее значение: {count}</p>
      <button onClick={store.increment}>+1 внешне</button>
    </div>
  )
}

export default function UseSyncExternalStoreDemo() {
  return (
    <div className="card">
      <h3>Подписка на внешнее хранилище</h3>
      <p>
        <strong>Зачем:</strong> синхронизировать React с внешним источником
        данных (zustand, redux, хранилище браузера), безопасно для SSR.
      </p>
      <Counter />
    </div>
  )
}

import { createContext, Suspense, use, useState } from 'react'

const UserContext = createContext<string | null>(null)

function UserGreeter() {
  const user = use(UserContext)
  return <p>Привет, {user || 'гость'}!</p>
}

let resolve: (v: string) => void
const userPromise = new Promise<string>((r) => {
  resolve = r
})

function AsyncUser() {
  const user = use(userPromise)
  return <p>Загружен пользователь: {user}</p>
}

export default function UseDemo() {
  const [user, setUser] = useState('Maks')
  const [showAsync, setShowAsync] = useState(false)

  return (
    <div className="card">
      <h3>use в рендере</h3>
      <p>
        <strong>Зачем:</strong> читать Context и Promise прямо во время рендера,
        интегрируясь с Suspense, без вложенных компонентов.
      </p>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Имя"
      />
      <UserContext.Provider value={user}>
        <UserGreeter />
      </UserContext.Provider>
      <hr />
      <button onClick={() => resolve?.('admin')}>Разрешить промис</button>
      <button onClick={() => setShowAsync(true)}>Показать AsyncUser</button>
      {showAsync && (
        <Suspense fallback={<p className="note">Ожидание промиса…</p>}>
          <AsyncUser />
        </Suspense>
      )}
    </div>
  )
}

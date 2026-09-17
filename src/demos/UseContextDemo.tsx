import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () => {} })

function ThemedCard() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 8,
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: '1px solid var(--border)',
      }}
    >
      Текущая тема: {theme}
    </div>
  )
}

export default function UseContextDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
      }}
    >
      <div className="card">
        <h3>Чтение контекста</h3>
        <p>
          <strong>Зачем:</strong> доставлять глобальные значения (тема,
          авторизация, язык) без prop drilling.
        </p>
        <ThemedCard />
        <button
          style={{ marginTop: 12 }}
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          Переключить тему
        </button>
      </div>
    </ThemeContext.Provider>
  )
}

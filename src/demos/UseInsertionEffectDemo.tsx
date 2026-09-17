import { useInsertionEffect, useLayoutEffect, useState } from 'react'

export default function UseInsertionEffectDemo() {
  const [color, setColor] = useState('#aa3bff')

  useInsertionEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .dynamic-box {
        background: ${color}20;
        border: 2px solid ${color};
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [color])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--accent', color)
    return () => {}
  }, [color])

  return (
    <div className="card">
      <h3>Вставка CSS до layout-эффектов</h3>
      <p>
        <strong>Зачем:</strong> CSS-in-JS библиотеки могут вставить стили до
        того, как React рассчитает layout, избегая блокировок рендера.
      </p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div
        className="dynamic-box"
        style={{
          marginTop: 12,
          padding: 16,
          borderRadius: 8,
          display: 'inline-block',
        }}
      >
        Цвет: {color}
      </div>
      <p className="note">
        useInsertionEffect срабатывает до useLayoutEffect, что критично для
        CSS-in-JS.
      </p>
    </div>
  )
}

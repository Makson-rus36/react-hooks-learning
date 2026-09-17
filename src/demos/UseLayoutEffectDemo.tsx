import { useLayoutEffect, useRef, useState } from 'react'

export default function UseLayoutEffectDemo() {
  const [count, setCount] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect()
      setSize({ width, height })
    }
  }, [count])

  return (
    <div className="card">
      <h3>Эффект до отрисовки</h3>
      <p>
        <strong>Зачем:</strong> измерения или изменения DOM, которые должны
        случиться до того, как браузер покажет кадр, иначе будет вспышка.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Пересчитать</button>
      <div
        ref={boxRef}
        style={{
          marginTop: 12,
          padding: 16,
          display: 'inline-block',
          background: 'var(--accent-bg)',
          border: '1px solid var(--accent-border)',
          borderRadius: 8,
        }}
      >
        Count: {count}
      </div>
      <p>Размер блока: {Math.round(size.width)} × {Math.round(size.height)} px</p>
    </div>
  )
}

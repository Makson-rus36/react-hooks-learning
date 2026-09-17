import { useOptimistic, useRef, useState } from 'react'

type Message = { id: number; text: string; status: string }

export default function UseOptimisticDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [optimistic, addOptimistic] = useOptimistic(
    messages,
    (state, newText: string) => [
      ...state,
      { id: state.length + 1, text: newText, status: 'sending' },
    ]
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const send = async (formData: FormData) => {
    const text = (formData.get('msg') as string) || ''
    if (!text.trim()) return
    addOptimistic(text)
    inputRef.current && (inputRef.current.value = '')
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text, status: 'sent' },
    ])
  }

  return (
    <div className="card">
      <h3>Оптимистичные обновления</h3>
      <p>
        <strong>Зачем:</strong> сразу показать результат, который, вероятно,
        случится, и бесшовно заменить на реальный, когда придёт ответ.
      </p>
      <form action={send}>
        <input ref={inputRef} name="msg" placeholder="Сообщение" />
        <button type="submit">Отправить</button>
      </form>
      <ul>
        {optimistic.map((m) => (
          <li key={m.id}>
            {m.text}{' '}
            <span style={{ color: m.status === 'sending' ? 'gray' : 'green' }}>
              ({m.status === 'sending' ? 'sending…' : 'sent'})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

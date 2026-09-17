import { useFormStatus } from 'react-dom'
import { useState } from 'react'

function SubmitButton() {
  const { pending, data, method } = useFormStatus()
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? 'Отправляется…' : 'Отправить'}
      </button>
      <p className="note">
        pending: {String(pending)} | method: {method || '—'} | data:
        {data ? String(data.get('name')) : '—'}
      </p>
    </div>
  )
}

export default function UseFormStatusDemo() {
  const [result, setResult] = useState('')

  const saveName = async (formData: FormData) => {
    const name = (formData.get('name') as string) || ''
    await new Promise((resolve) => setTimeout(resolve, 800))
    setResult(`Сохранено: ${name}`)
  }

  return (
    <div className="card">
      <h3>Статус ближайшей формы</h3>
      <p>
        <strong>Зачем:</strong> любой компонент внутри формы может узнать,
        отправляется ли она, без прокидывания состояний через props.
      </p>
      <form action={saveName}>
        <input name="name" placeholder="Имя" />
        <SubmitButton />
      </form>
      {result && <p className="note">{result}</p>}
    </div>
  )
}

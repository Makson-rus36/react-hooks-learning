import { useActionState } from 'react'

export default function UseActionStateDemo() {
  const [result, submit, pending] = useActionState(
    async (_prev: string, formData: FormData) => {
      const name = formData.get('name') as string
      await new Promise((resolve) => setTimeout(resolve, 800))
      return name ? `Привет, ${name}!` : 'Имя не указано'
    },
    ''
  )

  return (
    <div className="card">
      <h3>Состояние экшена</h3>
      <p>
        <strong>Зачем:</strong> управлять pending, ошибками и результатом
        отправки формы без ручных состояний.
      </p>
      <form action={submit}>
        <input name="name" placeholder="Имя" />
        <button type="submit" disabled={pending}>
          {pending ? 'Отправка…' : 'Отправить'}
        </button>
      </form>
      {result && <p className="note">Результат: {result}</p>}
    </div>
  )
}

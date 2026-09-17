import { useId, useState } from 'react'

export default function UseIdDemo() {
  const emailId = useId()
  const passwordId = useId()
  const [email, setEmail] = useState('')

  return (
    <div className="card">
      <h3>Стабильные уникальные id</h3>
      <p>
        <strong>Зачем:</strong> связывать <code>label</code> и <code>input</code>{' '}
        одновременно в SSR и CSR, не конфликтуя при гидратации.
      </p>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input
          id={emailId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
        />
      </div>
      <div>
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} type="password" />
      </div>
      <p className="note">Сгенерированные id: {emailId} / {passwordId}</p>
    </div>
  )
}

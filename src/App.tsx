import { useState } from 'react'
import './App.css'

import UseStateDemo from './demos/UseStateDemo'
import UseEffectDemo from './demos/UseEffectDemo'
import UseLayoutEffectDemo from './demos/UseLayoutEffectDemo'
import UseMemoDemo from './demos/UseMemoDemo'
import UseCallbackDemo from './demos/UseCallbackDemo'
import UseRefDemo from './demos/UseRefDemo'
import UseReducerDemo from './demos/UseReducerDemo'
import UseContextDemo from './demos/UseContextDemo'
import UseImperativeHandleDemo from './demos/UseImperativeHandleDemo'
import UseIdDemo from './demos/UseIdDemo'
import UseDeferredValueDemo from './demos/UseDeferredValueDemo'
import UseTransitionDemo from './demos/UseTransitionDemo'
import UseSyncExternalStoreDemo from './demos/UseSyncExternalStoreDemo'
import UseInsertionEffectDemo from './demos/UseInsertionEffectDemo'
import UseDemo from './demos/UseDemo'
import UseActionStateDemo from './demos/UseActionStateDemo'
import UseOptimisticDemo from './demos/UseOptimisticDemo'
import UseFormStatusDemo from './demos/UseFormStatusDemo'

export type HookMeta = {
  name: string
  since?: string
  why: string
  component: React.FC
}

const HOOKS: HookMeta[] = [
  { name: 'useState', why: 'Локальное состояние компонента.', component: UseStateDemo },
  { name: 'useEffect', why: 'Побочные эффекты: подписки, запросы, синхронизация с DOM.', component: UseEffectDemo },
  { name: 'useLayoutEffect', why: 'Эффект до отрисовки браузером: измерения, анимации, предотвращение вспышек.', component: UseLayoutEffectDemo },
  { name: 'useMemo', why: 'Кэширование дорогих вычислений между рендерами.', component: UseMemoDemo },
  { name: 'useCallback', why: 'Кэширование функций-обработчиков для детей, зависящих от ссылочного равенства.', component: UseCallbackDemo },
  { name: 'useRef', why: 'Сохранение мутабельного значения без перерисовки; ссылки на DOM-элементы.', component: UseRefDemo },
  { name: 'useReducer', why: 'Сложная логика состояния, похожая на Redux, без внешних библиотек.', component: UseReducerDemo },
  { name: 'useContext', why: 'Чтение значений контекста без prop drilling.', component: UseContextDemo },
  { name: 'useImperativeHandle', why: 'Кастомный API дочернего компонента при работе с ref.', component: UseImperativeHandleDemo },
  { name: 'useId', since: '18', why: 'Стабильные уникальные id для связки label/input и SSR/CSR.', component: UseIdDemo },
  { name: 'useDeferredValue', since: '18', why: 'Откладывает «тяжёлую» ветку UI, чтобы приоритетная оставалась отзывчивой.', component: UseDeferredValueDemo },
  { name: 'useTransition', since: '18', why: 'Помечает обновление как неблокирующее, показывая pending-состояние.', component: UseTransitionDemo },
  { name: 'useSyncExternalStore', since: '18', why: 'Подписка на внешнее хранилище с безопасным SSR/гидратацией.', component: UseSyncExternalStoreDemo },
  { name: 'useInsertionEffect', since: '18', why: 'Вставка CSS-in-JS до layout-эффектов, чтобы избежать блокировки рендера.', component: UseInsertionEffectDemo },
  { name: 'use', since: '19', why: 'Читает Context или Promise прямо в рендере, упрощая подписки и Suspense.', component: UseDemo },
  { name: 'useActionState', since: '19', why: 'Управляет состоянием формы/экшена: pending, ошибки, результат.', component: UseActionStateDemo },
  { name: 'useOptimistic', since: '19', why: 'Оптимистичное обновление UI до ответа сервера.', component: UseOptimisticDemo },
  { name: 'useFormStatus', since: '19', why: 'Информация о состоянии ближайшей формы из любого её ребёнка.', component: UseFormStatusDemo },
]

function App() {
  const [active, setActive] = useState(0)
  const Active = HOOKS[active].component

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>React Hooks</h1>
        <nav>
          {HOOKS.map((h, i) => (
            <button
              key={h.name}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              <span className="name">{h.name}</span>
              {h.since && <span className="badge">+{h.since}</span>}
            </button>
          ))}
        </nav>
      </aside>
      <main className="demo">
        <header>
          <h2>
            {HOOKS[active].name}
            {HOOKS[active].since && (
              <span className="version">добавлен в React {HOOKS[active].since}</span>
            )}
          </h2>
          <p className="why">{HOOKS[active].why}</p>
        </header>
        <Active />
      </main>
    </div>
  )
}

export default App

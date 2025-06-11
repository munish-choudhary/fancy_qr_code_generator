import { Suspense } from 'react'
import ExpensesForm from './expenses-form'
import Loading from './loading'

export default function ExpensesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ExpensesForm />
    </Suspense>
  )
}


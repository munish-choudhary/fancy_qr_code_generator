'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle, X, Calculator } from 'lucide-react'
import Header from '../components/Header'

type Expense = {
  id: string;
  category: string;
  amount: number;
}

type Person = {
  name: string;
  expenses: Expense[];
  totalExpense: number;
}

type Settlement = {
  from: string;
  to: string;
  amount: number;
}

export default function ExpensesForm() {
  const searchParams = useSearchParams()
  const [eventName, setEventName] = useState('')
  const [persons, setPersons] = useState<Person[]>([])
  const [totalExpense, setTotalExpense] = useState(0)
  const [settlements, setSettlements] = useState<Settlement[]>([])

  useEffect(() => {
    const event = searchParams.get('event')
    const count = searchParams.get('count')
    if (event) setEventName(event)
    if (count) {
      const personCount = parseInt(count, 10)
      if (persons.length === 0) {
        setPersons(Array(personCount).fill(null).map(() => ({ name: '', expenses: [], totalExpense: 0 })))
      }
    }
  }, [searchParams, persons.length])

  const handlePersonNameChange = (index: number, name: string) => {
    setPersons(prevPersons => prevPersons.map((person, i) => 
      i === index ? { ...person, name } : person
    ))
  }

  const addExpense = (personIndex: number) => {
    setPersons(prevPersons => prevPersons.map((person, i) => 
      i === personIndex 
        ? { ...person, expenses: [...person.expenses, { id: Date.now().toString(), category: '', amount: 0 }] }
        : person
    ))
  }

  const updateExpense = (personIndex: number, expenseIndex: number, field: 'category' | 'amount', value: string | number) => {
    setPersons(prevPersons => prevPersons.map((person, i) => 
      i === personIndex
        ? {
            ...person,
            expenses: person.expenses.map((exp, j) => 
              j === expenseIndex ? { ...exp, [field]: value } : exp
            )
          }
        : person
    ))
  }

  const removeExpense = (personIndex: number, expenseId: string) => {
    setPersons(prevPersons => prevPersons.map((person, i) => 
      i === personIndex
        ? { ...person, expenses: person.expenses.filter(exp => exp.id !== expenseId) }
        : person
    ))
  }

  const calculateExpenses = () => {
    let total = 0
    const updatedPersons = persons.map(person => {
      const personTotal = person.expenses.reduce((sum, exp) => sum + exp.amount, 0)
      total += personTotal
      return { ...person, totalExpense: personTotal }
    })
    setPersons(updatedPersons)
    setTotalExpense(total)

    const avgExpense = total / persons.length
    const debtors = updatedPersons.filter(p => p.totalExpense < avgExpense)
    const creditors = updatedPersons.filter(p => p.totalExpense > avgExpense)

    const newSettlements: Settlement[] = []

    debtors.forEach(debtor => {
      let amountToPayBack = avgExpense - debtor.totalExpense
      creditors.forEach(creditor => {
        if (amountToPayBack > 0) {
          const creditorSurplus = creditor.totalExpense - avgExpense
          const settlementAmount = Math.min(amountToPayBack, creditorSurplus)
          if (settlementAmount > 0) {
            newSettlements.push({
              from: debtor.name,
              to: creditor.name,
              amount: Number(settlementAmount.toFixed(2))
            })
            amountToPayBack -= settlementAmount
          }
        }
      })
    })

    setSettlements(newSettlements)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-center mb-6">{eventName} - Expenses</h1>
        <div className="space-y-6">
          {persons.map((person, personIndex) => (
            <Card key={personIndex}>
              <CardHeader>
                <CardTitle>
                  <Input
                    placeholder={`Person ${personIndex + 1} Name`}
                    value={person.name}
                    onChange={(e) => handlePersonNameChange(personIndex, e.target.value)}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {person.expenses.map((expense, expenseIndex) => (
                    <div key={expense.id} className="flex items-center space-x-2">
                      <Input
                        placeholder="Category (e.g., Petrol, Hotel, Meals)"
                        value={expense.category}
                        onChange={(e) => updateExpense(personIndex, expenseIndex, 'category', e.target.value)}
                      />
                      <Input
                        type="number"
                        placeholder="Amount"
                        value={expense.amount || ''}
                        onChange={(e) => updateExpense(personIndex, expenseIndex, 'amount', parseFloat(e.target.value) || 0)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeExpense(personIndex, expense.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => addExpense(personIndex)}
                    className="w-full"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button onClick={calculateExpenses} className="w-full">
            <Calculator className="mr-2 h-4 w-4" /> Calculate Expenses
          </Button>
        </div>
        {totalExpense > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Expense Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Total Expense: ${totalExpense.toFixed(2)}</p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Individual Expenses:</h3>
                <ul>
                  {persons.map((person, index) => (
                    <li key={index}>{person.name}: ${person.totalExpense.toFixed(2)}</li>
                  ))}
                </ul>
              </div>
              {settlements.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Settlements:</h3>
                  <ul>
                    {settlements.map((settlement, index) => (
                      <li key={index}>
                        {settlement.from} pays {settlement.to}: ${settlement.amount.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}


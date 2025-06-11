'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Header from './components/Header'

export default function Home() {
  const [eventName, setEventName] = useState('')
  const [personCount, setPersonCount] = useState(1)
  const router = useRouter()

  const incrementPerson = () => {
    setPersonCount(prevCount => prevCount + 1)
  }

  const decrementPerson = () => {
    setPersonCount(prevCount => Math.max(1, prevCount - 1))
  }

  const handleContinue = () => {
    if (eventName.trim() && personCount > 0) {
      router.push(`/expenses?event=${encodeURIComponent(eventName)}&count=${personCount}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Name of Event</Label>
                <Input
                  id="eventName"
                  placeholder="Enter event name"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Number of Persons</Label>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decrementPerson}
                    disabled={personCount <= 1}
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold">{personCount}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={incrementPerson}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={handleContinue}
              disabled={!eventName.trim() || personCount < 1}
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}


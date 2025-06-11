import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Event Splitter</div>
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}


import { Link } from "react-router-dom"
import type { ReactNode } from "react"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center bg-background/80 backdrop-blur border-b border-border">
        <nav className="container-full flex items-center justify-between w-full">
          <Link to="/" className="font-semibold tracking-tight">
            WALLTAIR
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} WALLTAIR AB. All rights reserved.
      </footer>
    </div>
  )
}
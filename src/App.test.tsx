import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from './App'

afterEach(() => vi.unstubAllEnvs())

describe('EventoFlux foundation', () => {
  it('shows a fictional demo with distinct manager and operator destinations', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /EventoFlux/ })).toBeInTheDocument()
    expect(screen.getByText('DEMO FICTÍCIA')).toBeInTheDocument()

    const navigation = screen.getByRole('navigation', { name: 'Percursos' })
    expect(within(navigation).getByRole('link', { name: /Gestor/ })).toHaveAttribute('href', '#gestor')
    expect(within(navigation).getByRole('link', { name: /Operador/ })).toHaveAttribute('href', '#operador')
    expect(screen.getByRole('region', { name: 'Gestor' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Operador' })).toBeInTheDocument()
  })

  it('explains the unconfigured local demo without presenting future flows as available', () => {
    vi.stubEnv('VITE_SUPABASE_URL', '')
    vi.stubEnv('VITE_SUPABASE_ANON_KEY', '')

    render(<App />)

    expect(screen.getByRole('status')).toHaveTextContent('Sem backend ligado')
    expect(screen.getByRole('status')).toHaveTextContent('.env.example')
    expect(screen.getAllByText(/PRs seguintes/)).toHaveLength(2)
  })

  it('does not claim backend access when local variables are set', () => {
    vi.stubEnv('VITE_SUPABASE_URL', 'http://localhost:54321')
    vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'fictional-test-value')

    render(<App />)

    expect(screen.getByRole('status')).toHaveTextContent('continua sem ligação a backend')
  })
})

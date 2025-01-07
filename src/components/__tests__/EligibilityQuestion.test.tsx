import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { EligibilityQuestion } from '../EligibilityQuestion'

describe('EligibilityQuestion', () => {
  it('renders the question text', () => {
    render(
      <EligibilityQuestion
        question="Have you donated blood in the last 12 weeks?"
        onChange={() => {}}
      />
    )
    
    expect(screen.getByText('Have you donated blood in the last 12 weeks?')).toBeInTheDocument()
  })

  it('calls onChange with true when Yes is clicked', () => {
    const onChange = vi.fn()
    render(
      <EligibilityQuestion
        question="Have you donated blood in the last 12 weeks?"
        onChange={onChange}
      />
    )
    
    fireEvent.click(screen.getByRole('button', { name: 'Yes' }))
    expect(onChange).toHaveBeenCalledWith(true)
  })
})

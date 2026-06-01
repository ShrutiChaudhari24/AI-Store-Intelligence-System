/**
 * Unit Tests - Utilities
 */

import { describe, it, expect } from 'vitest'
import {
  formatNumber,
  formatPercentage,
  isValidEmail,
  isValidUrl,
  capitalizeString,
} from '@utils/index'

describe('Formatting Utilities', () => {
  it('should format number with decimals', () => {
    // TODO: Implement test
    expect(formatNumber(123.456, 2)).toBe('123.46')
  })

  it('should format percentage', () => {
    // TODO: Implement test
    expect(formatPercentage(75.5)).toContain('%')
  })
})

describe('Validation Utilities', () => {
  it('should validate email', () => {
    // TODO: Implement test
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('invalid')).toBe(false)
  })

  it('should validate URL', () => {
    // TODO: Implement test
    expect(isValidUrl('https://example.com')).toBe(true)
    expect(isValidUrl('not a url')).toBe(false)
  })
})

describe('String Utilities', () => {
  it('should capitalize string', () => {
    // TODO: Implement test
    expect(capitalizeString('hello')).toBe('Hello')
  })
})

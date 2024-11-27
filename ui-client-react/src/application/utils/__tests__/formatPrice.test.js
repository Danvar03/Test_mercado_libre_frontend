import { formatPrice } from '../formatPrice';

describe('formatPrice', () => {
  it('should return "N/A" if price is null or undefined', () => {
    expect(formatPrice(null)).toBe('N/A');
    expect(formatPrice(undefined)).toBe('N/A');
  });

  it('should format the price correctly', () => {
    const price = {
      currency: 'ARS',
      amount: 1234.56,
    };
    expect(formatPrice(price)).toBe('ARS 1.234,56');
  });

  it('should handle zero amount correctly', () => {
    const price = {
      currency: 'ARS',
      amount: 0,
    };
    expect(formatPrice(price)).toBe('ARS 0,00');
  });

  it('should handle large amounts correctly', () => {
    const price = {
      currency: 'ARS',
      amount: 1234567890.12,
    };
    expect(formatPrice(price)).toBe('ARS 1.234.567.890,12');
  });
});

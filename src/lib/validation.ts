export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  if (value.trim().length === 0) return true;
  return /^[+\d][\d\s()-]{6,}$/.test(value.trim());
}

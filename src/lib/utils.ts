export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter((v): v is string => typeof v === 'string').join(' ');
}

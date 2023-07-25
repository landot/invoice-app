export function convertToCostString(num: number): string {
  return ((num * 100) / 100).toFixed(2);
}

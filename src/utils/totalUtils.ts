import { Item } from "../data/types/Data";
import { convertToCostString } from "./convertToCostString";

export function calculateTotal(items: Item[]): number {
  return items.reduce((pv, cv) => pv + cv.total, 0);
}

export function getTotalString(items: Item[]): string {
  return convertToCostString(calculateTotal(items));
}

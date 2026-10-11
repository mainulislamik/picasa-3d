import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: "USD" | "EUR" | "GBP" = "USD"
): string {
  const rates = {
    USD: { symbol: "$", factor: 1 },
    EUR: { symbol: "€", factor: 0.92 },
    GBP: { symbol: "£", factor: 0.79 },
  };

  const current = rates[currency] || rates.USD;
  const converted = amount * current.factor;

  return `${current.symbol}${converted.toFixed(2)}`;
}

export function getVolumeDiscount(volume: number): number {
  if (volume >= 1000) return 0.35; // 35% Enterprise discount
  if (volume >= 200) return 0.20;  // 20% Volume discount
  if (volume >= 50) return 0.10;   // 10% Studio discount
  return 0;                        // 0% Standard rate
}

export function getTurnaroundMultiplier(sla: "standard" | "express" | "rush"): number {
  switch (sla) {
    case "express":
      return 1.25; // +25%
    case "rush":
      return 1.50; // +50%
    default:
      return 1.0;  // 0%
  }
}

export function calculatePricingEstimate(
  basePrice: number,
  volume: number,
  multiplier: number = 1.0,
  rushFeePercent: number = 0
) {
  let discountPercent = 0;
  if (volume >= 1000) discountPercent = 35;
  else if (volume >= 200) discountPercent = 20;
  else if (volume >= 50) discountPercent = 10;

  const basePerImage = basePrice;
  const subtotal = basePerImage * volume;
  const discountAmount = subtotal * (discountPercent / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const rushFeeAmount = discountedSubtotal * (rushFeePercent / 100);
  const total = discountedSubtotal + rushFeeAmount;
  const finalPerImage = volume > 0 ? total / volume : basePrice;

  return {
    basePerImage,
    subtotal,
    discountPercent,
    discountAmount,
    rushFeeAmount,
    total,
    finalPerImage,
  };
}

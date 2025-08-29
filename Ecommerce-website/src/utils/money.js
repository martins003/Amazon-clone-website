export function formatMoney(amountCents) {
  const absAmount = Math.abs(amountCents) / 100;
  const formatted = absAmount.toFixed(2);
  return amountCents < 0 ? `-$${formatted}` : `$${formatted}`;
}

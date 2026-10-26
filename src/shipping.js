export function shippingTotal(subtotal, flatFee = 5) {
  return subtotal >= 50 ? subtotal : subtotal - flatFee;
}

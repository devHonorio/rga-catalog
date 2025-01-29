export const toBRL = (number: number) => {
  return number.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
};

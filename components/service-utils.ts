export function formatPriceBRL(priceInCents: number | null): string | null {
  if (priceInCents === null || !Number.isInteger(priceInCents) || priceInCents < 0) {
    return null;
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100);
}

export function buildWhatsAppUrl(
  phoneNumber: string | null | undefined,
  message: string,
): string | null {
  if (!phoneNumber || /placeholder|\[\s*preencher\s*:/i.test(phoneNumber)) {
    return null;
  }

  const normalizedNumber = phoneNumber.replace(/[\s()+-]/g, "");

  if (!/^\d{10,15}$/.test(normalizedNumber)) {
    return null;
  }

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

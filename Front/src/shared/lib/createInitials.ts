export const createInitials = (name: string): string => {
  if (!name) return '';

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

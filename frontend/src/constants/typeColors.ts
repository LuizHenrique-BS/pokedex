export const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  normal: { bg: "#A8A77A", text: "#FFFFFF", border: "#79794E" },
  fire: { bg: "#EE8130", text: "#FFFFFF", border: "#9C531F" },
  water: { bg: "#6390F0", text: "#FFFFFF", border: "#445E9C" },
  electric: { bg: "#F7D02C", text: "#000000", border: "#A1871F" },
  grass: { bg: "#7AC74C", text: "#FFFFFF", border: "#4E8234" },
  ice: { bg: "#96D9D6", text: "#000000", border: "#638D8D" },
  fighting: { bg: "#C22E28", text: "#FFFFFF", border: "#7D1F1A" },
  poison: { bg: "#A33EA1", text: "#FFFFFF", border: "#682A68" },
  ground: { bg: "#E2BF65", text: "#000000", border: "#927D44" },
  flying: { bg: "#A98FF3", text: "#FFFFFF", border: "#6D5E9C" },
  psychic: { bg: "#F95587", text: "#FFFFFF", border: "#A13959" },
  bug: { bg: "#A6B91A", text: "#FFFFFF", border: "#6D7811" },
  rock: { bg: "#B6A136", text: "#FFFFFF", border: "#786824" },
  ghost: { bg: "#735797", text: "#FFFFFF", border: "#413359" },
  dragon: { bg: "#6F35FC", text: "#FFFFFF", border: "#4924A1" },
  steel: { bg: "#B7B7CE", text: "#000000", border: "#787887" },
  fairy: { bg: "#D685AD", text: "#FFFFFF", border: "#9B486F" },
  dark: { bg: "#705746", text: "#FFFFFF", border: "#49392F" },
};

export const getTypeStyles = (type: string) => {
  const normalizedType = type.toLowerCase();
  return (
    TYPE_COLORS[normalizedType] || {
      bg: "var(--accent-bg)",
      text: "var(--accent)",
      border: "var(--accent-border)",
    }
  );
};

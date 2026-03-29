export const getResistanceMultiplierText = (multiplier: number): string => {
  const multiplierMap: Record<number, string> = {
    0: "0x",
    0.25: "¼x",
    //0.5: "½x",
  };
  return multiplierMap[multiplier] ?? "";
};

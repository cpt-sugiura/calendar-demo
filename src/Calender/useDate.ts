type UseDateRet = {
  hours24: DateStruct[];
};

export type DateStruct = {
  hour: number;
  label: string;
};

export const useDate = (): UseDateRet => {
  const hours24: DateStruct[] = Array(24)
    .fill(0)
    .map((_, i) => {
      const isPre = i <= 11 ? '午前' : '午後';
      return {
        hour: i,
        label: `${isPre}${i % 12}時`,
      };
    });
  return {
    hours24,
  };
};

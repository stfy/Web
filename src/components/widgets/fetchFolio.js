import { fetchDedupe } from "fetch-dedupe";

const MIN_PART = 0.2;

export const fetchFolio = async (tokenAddress) => {
  if (!tokenAddress) {
    return [];
  } else {
    const response = await fetchDedupe(`/rawfolio/${tokenAddress}`).then(
      (res) => res.data
    );

    return response.data
      .map((r) => ({
        pricePercentValue: r.percent,
        name: r.symbol,
        token: "",
      }))
      .filter((r) => r.pricePercentValue > MIN_PART);
  }
};

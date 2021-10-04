export const tokenInfo = {
  afford: {
    address: "0x949DF40227F764C258557EFD1b5A71A760E42162",
    symbol: "FCLG",
    apiName: "afford-capital",
    name: "Tiger",
    tableName: "Tiger",
    dao: "0xe6563a2e20c6025174d63a5af64b157a59b91c7a",
    carryPercent: 0.2,
    vaults: ["0x80eb71730f63c124db241ce1fd03f2b360436312"],
    maximumDiff: 4,
    enableCarry: true,
  },
};

export const tokens = ["afford"];

export const dashboardTokens = ["afford"];

export const legacyTokens = [];

export const allTokens = tokens.map((token) => tokenInfo[token]);

export const tokenAddresses = tokens.map((token) => tokenInfo[token].address);

export const legacyTokenAddresses = legacyTokens.map(
  (token) => tokenInfo[token].address
);

export const currencyInfo = {
  usdt: {
    symbol: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    image: "type4",
  },
  usdc: {
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    image: "type5",
  },
  dai: {
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    image: "type3",
  },
};

export const currencies = ["usdt", "usdc", "dai"];

export const apiNameByAddress = (address) =>
  [...tokens, ...legacyTokens]
    .map((token) => tokenInfo[token])
    .find((info) => info.address.toLowerCase() === address.toLowerCase())
    .apiName;

export const nameByAddress = (address) =>
  [...tokens, ...legacyTokens]
    .map((token) => ({
      ...tokenInfo[token],
      name: token,
    }))
    .find((info) => info.address.toLowerCase() === address.toLowerCase()).name;

export const onChainDayIdStart = (address) =>
  tokens
    .map((token) => tokenInfo[token])
    .find((info) => info.address.toLowerCase() === address.toLowerCase())
    ?.onChainDayIdStart;

export const maximumDiff = (address) =>
  tokens
    .map((token) => tokenInfo[token])
    .find((info) => info.address.toLowerCase() === address.toLowerCase())
    ?.maximumDiff;

// 0x108977FE1Cfd10f27D9591C33b8FE9733FD83D2C

import React from "react";

export const Afford_i18n = {
  ru: {
    Short:
      "Стратегия автоматической покупки/продажи волатильных активов (н-р, ETH, BTC) при пересечении 20-дневной средней скользящей цены актива.",
    Details: `
    ETH, BTC или другие DeFi активы покупаются и удерживаются до момента пересечения 20-дневной средней скользящей цены. На этом этапе актив продается за стейблкоин и выкупается снова, когда 20-дневная средняя скользящая цена поднимается выше ценовой отметки. Ребалансировка осуществляется не чаще, чем раз в 4 дня.
    `,
    Benefits: `
      - Возможно резкое падение цены выбранного актива (ETH, BTC и др.) и длительный низкий рыночный период с нулевым движением <br/>
      - Если вывод из актива производится сразу после падения цены, убыток может быть значительным (историческое предельное падение цены ETH в 2020 году: с -1,7% до -26,5%)
    `,
  },
  en: {
    Short:
      "Automated buy/sell strategy of volatile assets (e.g. ETH,BTC) when a 20 days moving average asset price point is crossed.",
    Details: `
    ETH, BTC or other DeFi assets are bought and held up to the point when the 20 days moving average price is crossed. At this stage the asset is sold for stable coin, and repurchased again once the 20 days moving average price moves above the price point. Rebalanced not earlier than every 4 days.
    `,
    Benefits: `
    - Possible sharp price drop of selected asset (ETH, BTC, etc) and long low market period with zero movement <br/>
    = If withdrawal from the asset is made right after the price drop the loss may be significant (2020 ETH historical peak price drops = from -1,7% to -26,5%)
    `,
  },
};

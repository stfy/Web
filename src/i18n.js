import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import OnChainValidation from "./components/OnChainValidation";
import { Afford_i18n } from "./components/data/descriptions";
import AssetTableRowDropdown from "./components/AssetTableRowDropdown";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",

      header: {
        "About Us": "About Us",
        Strategies: "Strategies",
        "How it Works": "How it Works",
        Dashboard: "Dashboard",
        "Connect Wallet": "Connect Wallet",
        "Join DAO": "Join DAO",
      },

      index: {
        "TOTAL VALUE OF ASSETS": "TOTAL VALUE OF ASSETS",
        desc: `At present, making investments using DAOs (Decentralized
                  Autonomous Organizations) is the main way to preserve and
                  increase your capital.`,
        "desc-appendix": `
        Your finances are managed by experienced finance and
                  cryptocurrency experts, all fund activities are transparent
                  and monitored using open protocols.
        `,
        Strategies: "Strategies",
        "Annual Percentage Yield (APY)": "Annual Percentage Yield (APY)",
        "Total Value Locked (TVL)": "Total Value Locked (TVL)",
        "Dont Trust - Verify": "Don't Trust — Verify",
        "We are using these audited protocols":
          "We are using these audited protocols",

        "Security Audit": "Security Audit",
        "Afford Capital DAO": "Afford Capital DAO",
        "is a dec": `is a decentralized autonomous organization based on Aragon.`,
        "Aragon Smart Contract Audits": "Aragon Smart Contract Audits",
        "A number of": `A number of audits have been performed on the existing smart
                contract codebase by the White Hat Group, Consensys Diligence,
                Authio, and others. Ongoing smart contract changes will continue
                being audited at the Aragon Association's discretion.`,
        "Details:": "Details:",

        "As one of": `As one of the most experienced teams in the space, ConsenSys
                Diligence is at the cutting edge of offensive cryptography,
                blockchain technology, and cryptoeconomic incentive analysis.`,

        "Authio is":
          "Authio is a smart contract auditing and security consulting firm.",

        "How it works": "How it works",
        "Choose your strategy": "Choose your strategy",
        "Build your": `Build your portfolio with different allocation strategies
                    that aim to maximize your returns and keep you in your
                    comfortable risk zone`,
        "Deposit your stablecoin": "Deposit your stablecoin",
        "Just deposit": `Just deposit and relax. Your funds will be automatically
                    allocated across DeFi protocols and you will immediately
                    start earning interest.`,

        "Watch Semi-Automated Rebalancing": "Watch Semi-Automated Rebalancing",
        "Market opportunities": `Market opportunities and sentiments continuously monitored
                    via oracles, bots and other tools. Portfolio reallocation-
                    semi-automatic to avoid potential market data violations and
                    hacks`,

        "Redeem Instantly": `Redeem Instantly`,
        "Monitor your": `Monitor your funds' performance and rebalance events, see
                    your estimated earnings and easlily redeem your funds +
                    interest.`,

        "Privacy Policy": "Privacy Policy",
        "Cookie Policy": "Cookie Policy",
      },

      sidebar: {
        "My Account": "My Account",
        Dashboard: "Dashboard",
        "About Us": "About Us",
        Strategies: "Strategies",
        "How it Works": "How it Works",
        "Connect Wallet": "Connect Wallet",
        "Join DAO": "Join DAO",
        Feedback: "Contact us",
        Main: "Main",
      },

      OfferRequest: {
        "Buy tokens": "Buy tokens",
        Receive: "Receive",
        For: "For",
        Deposit: "Deposit",
        Withdraw: "Withdraw",
      },
      Dashboard: {
        Dashboard: "Dashboard",
      },
      MyAccount: {
        "My Account": "My Account",
        "Connect wallet": "Connect wallet",
        TableInfo: "Move the table left and right, to watch it in full",
      },

      TokenDashboard: {
        TokenPriceWName: `{name} token price`,
        Net: `Portfolio`,
        Portfolio: "Portfolio",
        "Token Price": `Token Price`,
        "Liquidity pools": "Liquidity pools",
        "Portfolio Value": "Portfolio Value",
        "Accumulated Carry": "Accumulated Carry",
      },

      OnChainValidation: {
        Wallet: `Wallet`,
      },

      AssetTableRowDropdown: {
        "Whats it like": "What's it like",
        Details: "Details",
        Risks: "Risks",
        APY: "Annual Percentage Yield (APY)",
        TVL: "Total Value Locked (TVL)",
      },

      Tokens: {
        afford: Afford_i18n.en,
      },

      TokenRequestEmbedded: {
        "Token Request works":
          "Token Request works for amounts over $3,000 USDT / USDC / DAI",
        "For smaller":
          "For smaller amounts kindly proceed to Uniswap, Sushiswap or 1Inch",
        "Dear user": "Dear user",
      },

      token: {
        Tiger: "Tiger",
      },

      TokenTableInfo: {
        Product: "Product",
        Token: "Token",
        Amount: "Amount",
        "Invested amount": "Invested amount",
        "AVG purchase price": "AVG purchase price",
        "Token price": "Token price",
        "Portfolio value": "Portfolio value",
        "Profit/Loss": "Profit/Loss",
        APY: "APY",
        TOTAL: "TOTAL",
      },

      ErrorMessage: {
        "Not enough balance": "Not enough USDT / USDC / DAI on balance",
        "Not enough ETH": "Not enough ETH to pay transaction fees",
        "only DAI withdrawal is allowed":
          "At the moment, only DAI withdrawal is allowed",
        "Not Enough Token On Balance": "Not enough {{tokenName}} on balance",
        "Not enough Token on agent balance":
          "Not enough {{offeredTokenSymbol}} on agent balance",
        "It is impossible to make a withdrawal":
          "It is impossible to make a withdrawal due to high volatility (This is when the price of Dex differs greatly from ours)",
      },
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",

      header: {
        "About Us": "О нас",
        Strategies: "Стратегии",
        "How it Works": "Как это работает?",
        Dashboard: "Дашборд",
        "Connect Wallet": "Подключить кошелек",
        "Join DAO": "Вступить в DAO",
      },
      index: {
        "TOTAL VALUE OF ASSETS": "ОБЩАЯ СТОИМОСТЬ АКТИВОВ",
        desc: `Инвестирование с помощью DAO (децентрализованных финансовых организаций) на сегодняшний день — это главный способ сохранить и приумножить ваш капитал. `,
        "desc-appendix": `Ваши финансы находятся под управлением опытных экспертов в области финансов и криптовалют, а вся деятельность фонда прозрачна и контролируется с помощью открытых протоколов.`,
        Strategies: "Стратегии",
        "Annual Percentage Yield (APY)": "Годовой Процентый Доход (APY)",
        "Total Value Locked (TVL)": "Общая сумма заблокированных средств (TVL)",
        "Dont Trust - Verify": "НЕ ДОВЕРЯЙ — ПРОВЕРЯЙ",
        "We are using these audited protocols":
          "Мы используем следующие проверенные протоколы",

        "Security Audit": "Аудит безопасности",
        "Afford Capital DAO": "Afford Capital DAO",
        "is a dec": `— децентрализованная автономная организация, основанная на Aragon.`,
        "Aragon Smart Contract Audits": "Аудит смарт-контрактов Aragon",
        "A number of": `White Hat Group, Consensys Diligence, Authio и другие организации осуществили ряд аудитов текущей кодовой базы смарт-контрактов. Возникающие изменения смарт-контрактов будут проходить дальнейшую проверку по усмотрению Aragon Association.`,
        "Details:": "Подробнее:",

        "As one of": `Являясь одной из самых опытных команд в этой сфере, ConsenSys Diligence находится в числе передовых компаний в области наступательной криптографии, технологии блокчейн и криптоэкономического анализа стимулов.`,

        "Authio is":
          "Authio — это фирма, занимающаяся аудитом смарт-контрактов и консалтингом в области безопасности.",

        "How it works": "КАК ЭТО РАБОТАЕТ?",
        "Choose your strategy": "Выберите стратегию",
        "Build your": `Сформируйте ваш портфель с различными стратегиями распределения для того, чтобы получить максимальную прибыль и оставаться в зоне допустимого риска.`,
        "Deposit your stablecoin": "Положите ваши стейблкоины на депозит",
        "Just deposit": `Просто внесите депозит и расслабьтесь. Ваши средства будут автоматически распределены по протоколам DeFi, и вы сразу же начнете получать проценты.`,

        "Redeem Instantly": `Выкупайте мгновенно`,
        "Monitor your": `Отслеживайте свои финансовые показатели и события ребалансировки, проверяйте предполагаемую прибыль и с легкостью выкупайте свои средства + проценты.`,

        "Privacy Policy": "Политика конфиденциальности",
        "Cookie Policy": "Политика использования Cookie-файлов",
      },

      sidebar: {
        "My Account": "Мой Аккаунт",
        Dashboard: "Дашборд",
        "About Us": "О нас",
        Strategies: "Стратегии",
        "How it Works": "Как это работает?",
        "Connect Wallet": "Подключить кошелек",
        "Join DAO": "Вступить в DAO",
        Feedback: "Свяжитесь с нами",
        Main: "Главная",
      },

      OfferRequest: {
        "Buy tokens": "Купить токены",
        Receive: "Приобрести",
        For: "За",
        Deposit: "Приобрести",
        Withdraw: "Вывести",
      },

      Dashboard: {
        Dashboard: "Дашборд",
      },

      MyAccount: {
        "My Account": "Мой аккаунт",
        "Connect wallet": "Подключить кошелек",
        TableInfo:
          "Двигайте таблицу влево-вправо, чтобы посмотреть ее полностью",
      },

      TokenDashboard: {
        TokenPriceWName: `Цена токена {name}`,
        Net: `Net портфель`,
        Portfolio: "Портфель",
        "Token Price": `Цена токена`,
        "Liquidity pools": "Пулы ликвидности",
        "Portfolio Value": "Стоимость портфеля",
        "Accumulated Carry": "Накопленный Кэрри: ",
      },
      OnChainValidation: {
        Wallet: "Кошелек",
      },

      AssetTableRowDropdown: {
        "Whats it like": "На что это похоже?",
        Details: "Детали",
        Risks: "Риск",

        APY: "Годовой процентный доход (APY)",
        TVL: "Общая сумма (TVL)",
      },

      Tokens: {
        afford: Afford_i18n.ru,
      },

      TokenRequestEmbedded: {
        "Token Request works":
          "приобретение токенов доступно только для вкладов больше $3,000 USDT / USDC / DAI",
        "For smaller":
          "Для меньших сумм рекомендуем перейти к Uniswap, Sushiswap or 1Inch",
        "Dear user": "Уважаемый Пользователь",
      },

      token: {
        Tiger: "Тигр",
      },

      TokenTableInfo: {
        Product: "Продукт",
        Token: "Токен",
        Amount: "Сумма",
        "Invested amount": "Инвестированная сумма",
        "AVG purchase price": "Средняя стоимость покупки",
        "Token price": "Цена токена",
        "Portfolio value": "Стоимость портфеля",
        "Profit/Loss": "Прибыль/Убыток",
        APY: "APY",
        TOTAL: "ИТОГО",
      },

      ErrorMessage: {
        "Not enough balance": "Недостаточно USDT / USDC / DAI на балансе",
        "Not enough ETH": "Недостаточно ETH для оплаты комисии за транзакци.",
        "only DAI withdrawal is allowed":
          "На данный момнет, доступен только вывод DAI",
        "Not Enough Token On Balance": "Недостаточно {{tokenName}} на балансе",
        "Not enough Token on agent balance":
          "Недостаточно {{offeredTokenSymbol}} на балансе агента",
        "It is impossible to make a withdrawal":
          "It is impossible to make a withdrawal due to high volatility (This is when the price of Dex differs greatly from ours)",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18n;

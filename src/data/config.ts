const config = {
  defaultTitle: 'QI KAI LE',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
      : 'http://localhost:3000',
  defaultDescription: 'I’m Qikaile and I’m a Developer & Mechanical engineer!',
  googleAnalyticsID: 'G-1CJWSZDRRM',
};

export default config;

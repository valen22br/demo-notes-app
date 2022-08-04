const config = {
    SENTRY_DSN: "https://858da6ef7ed549b0a0127170b9e43785@o1346952.ingest.sentry.io/6625239",
    STRIPE_KEY: "pk_test_51LNGXKAHiQtZ12wuQC6MKIm9l03C61n3SwUrTQyUm9Mpx2eBFblOulRZDgmhtt1fXteul3S5n6kbVjqdlLAN3bRX005KIaZ7P9",
    MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;
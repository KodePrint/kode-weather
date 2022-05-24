export const env = {
  isProd: process.env.Node_Env === 'production',
  apiKey: process.env.REACT_APP_KODEWEATHER_KEY,
  weatherKey: process.env.REACT_APP_WEATHER_KEY
}
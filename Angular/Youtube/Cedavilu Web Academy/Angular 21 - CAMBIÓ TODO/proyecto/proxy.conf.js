// Proxy del dev-server de Angular (Vite) para consumir restcountries.com
// sin error 403 "Origin is not allowed for this API key".
//
// El navegador llama a /api/...  ->  el proxy reescribe a
// https://api.restcountries.com/countries/...  quitando los headers
// Origin/Referer (que son los que la API rechaza) y agregando el Bearer token.
module.exports = {
  '/api': {
    target: 'https://api.restcountries.com',
    changeOrigin: true,
    secure: true,
    // /api/v5?q=stan  ->  /countries/v5?q=stan
    rewrite: (path) => path.replace(/^\/api/, '/countries'),
    configure: (proxy) => {
      proxy.on('proxyReq', (proxyReq) => {
        // La API valida el Origin del navegador; al ser una petición
        // servidor-a-servidor lo eliminamos para que la acepte.
        proxyReq.removeHeader('origin');
        proxyReq.removeHeader('referer');
        proxyReq.setHeader(
          'Authorization',
          'Bearer rc_live_b93be68b1cca46c6a7e8924d49f44486'
        );
      });
    },
  },
};

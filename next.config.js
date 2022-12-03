/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },

          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Access-Control-Allow-Origin",
            value:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org https://fonts.googleapis.com https://fonts.gstatic.com ",
          },
          {
            key: "Content-Security-Policy",

            value:
              process.env.NODE_ENV === "development"
                ? ``
                : `
                    default-src 'self' https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ https://champagne-swan-9qjeo5190-molitio.vercel.app/;
                    script-src 'self';
                    child-src 'self';
                    object-src 'self';
                    style-src 'self' https://fonts.googleapis.com https://champagne-swan-9qjeo5190-molitio.vercel.app/;
                    require-trusted-types-for 'script';
                    font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://s3.eu-west-1.amazonaws.com/filestore.molitio.org;  
                  `
                    .replace(/\s{2,}/g, " ")
                    .trim(),
          },
        ],
      },
    ];
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3.eu-west-1.amazonaws.com",
          pathname: "/filestore.molitio.org/champagne-swan/web-content/**",
        },
      ],
    },
  },
};

module.exports = nextConfig;

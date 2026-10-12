/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ghost-mannequin-service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/images-cut-out",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/background-removal-service-provider",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/retouching",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/shadow-and-reflection",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/color-correction",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/raster-to-vector",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/image-post-processing-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/3d",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/video-editing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/web-development-service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/our-works",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

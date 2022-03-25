module.exports = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/', destination: '/' },
      { source: '/portofoliu', destination: '/' },
      { source: '/despre', destination: '/' },
      { source: '/servicii', destination: '/' },
      { source: '/contact', destination: '/' },
      { source: '/firstProject', destination: '/firstProject' },
    ];
  },
};

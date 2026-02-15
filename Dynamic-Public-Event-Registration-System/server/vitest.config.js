// 🧪 vitest.config.js — Server-Side Testing Setup for Node.js APIs

export default {
  test: {
    globals: true,
    environment: 'node',
    include: ['__tests__/**/*.test.js'],
  },
}

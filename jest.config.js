module.exports = {
    testEnvironment: "jsdom",
    coverageThreshold: {
        global: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        },
      },
      coverageReporters: ["lcov", "text", "text-summary"]
};
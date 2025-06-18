export function getHelloMessage() {
  return 'Hello from the backend!';
}

export function getEnvironmentInfo() {
  return {
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString(),
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      nodeEnv: process.env.NODE_ENV || 'development',
      pid: process.pid,
      uptime: process.uptime()
    },
    system: {
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      title: process.title,
      version: process.version,
      versions: process.versions
    },
    package: {
      name: '@deepak-terse/hello-api',
      version: '1.0.0'
    }
  };
}

export function getSystemHealth() {
  const memUsage = process.memoryUsage();
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    metrics: {
      memory: {
        rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
        external: `${Math.round(memUsage.external / 1024 / 1024)} MB`
      },
      uptime: `${Math.round(process.uptime())} seconds`
    }
  };
} 
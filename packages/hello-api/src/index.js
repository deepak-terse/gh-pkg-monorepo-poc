/**
 * Returns a hello message from the backend.
 * @returns {string} The hello message.
 */
export function getHelloMessage() {
  return 'Hello from the backend!';
}

/**
 * @typedef {Object} EnvironmentInfo
 * @property {string} nodeVersion
 * @property {string} platform
 * @property {string} arch
 * @property {string} nodeEnv
 * @property {number} pid
 * @property {number} uptime
 * @property {Object} memoryUsage
 * @property {Object} cpuUsage
 * @property {string} title
 * @property {Object} versions
 */

/**
 * Returns real Node.js environment and system information from the backend.
 * @returns {EnvironmentInfo} The environment information object.
 */
export function getEnvironmentInfo() {
  return {
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    nodeEnv: process.env.NODE_ENV || 'development',
    pid: process.pid,
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
    title: process.title,
    versions: process.versions
  };
}

/**
 * @typedef {Object} SystemHealth
 * @property {string} status
 * @property {string} timestamp
 * @property {{
 *   memory: {
 *     rss: string,
 *     heapTotal: string,
 *     heapUsed: string,
 *     external: string
 *   },
 *   uptime: string
 * }} metrics
 */

/**
 * Returns system health metrics from the backend (memory and uptime only, no mock values).
 * @returns {SystemHealth} The system health object.
 */
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
import express from 'express';
import { getHelloMessage, getEnvironmentInfo, getSystemHealth } from '@deepak-terse/hello-api';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Basic hello endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: getHelloMessage(),
    timestamp: new Date().toISOString(),
    endpoints: {
      hello: '/',
      environment: '/api/environment',
      health: '/api/health',
      all: '/api/all'
    }
  });
});

// Environment information endpoint
app.get('/api/environment', (req, res) => {
  try {
    const envInfo = getEnvironmentInfo();
    res.json({
      success: true,
      data: envInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// System health endpoint
app.get('/api/health', (req, res) => {
  try {
    const health = getSystemHealth();
    res.json({
      success: true,
      data: health
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Combined endpoint with all information
app.get('/api/all', (req, res) => {
  try {
    const envInfo = getEnvironmentInfo();
    const health = getSystemHealth();
    
    res.json({
      success: true,
      data: {
        hello: getHelloMessage(),
        environment: envInfo,
        health: health,
        server: {
          timestamp: new Date().toISOString(),
          port: port,
          nodeEnv: process.env.NODE_ENV || 'development'
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check endpoint for monitoring
app.get('/health', (req, res) => {
  const health = getSystemHealth();
  const status = health.status === 'healthy' ? 200 : 503;
  
  res.status(status).json({
    status: health.status,
    timestamp: health.timestamp,
    uptime: health.metrics.uptime
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    availableEndpoints: [
      'GET /',
      'GET /api/environment',
      'GET /api/health',
      'GET /api/all',
      'GET /health'
    ]
  });
});

app.listen(port, () => {
  console.log(`🚀 Backend server running at http://localhost:${port}`);
  console.log(`📊 Environment info available at http://localhost:${port}/api/environment`);
  console.log(`❤️  Health check available at http://localhost:${port}/health`);
  console.log(`🔍 All data available at http://localhost:${port}/api/all`);
}); 
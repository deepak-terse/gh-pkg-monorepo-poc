import { useState, useEffect } from 'react';

function HelloFromFrontend() {
  const [environmentInfo, setEnvironmentInfo] = useState(null);
  const [systemHealth, setSystemHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching environment info from the API
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll simulate the data
        const mockEnvInfo = {
          message: 'Hello from the frontend!',
          timestamp: new Date().toISOString(),
          environment: {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            onLine: navigator.onLine,
            screenResolution: `${screen.width}x${screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`
          },
          system: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            dateTime: new Date().toLocaleString(),
            url: window.location.href,
            referrer: document.referrer || 'Direct access'
          },
          package: {
            name: '@deepak-terse/hello-ui',
            version: '1.0.0'
          }
        };

        const mockHealth = {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          metrics: {
            performance: {
              loadTime: `${Math.round(performance.now())} ms`,
              memory: performance.memory ? {
                used: `${Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)} MB`,
                total: `${Math.round(performance.memory.totalJSHeapSize / 1024 / 1024)} MB`,
                limit: `${Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)} MB`
              } : 'Not available'
            }
          }
        };

        setEnvironmentInfo(mockEnvInfo);
        setSystemHealth(mockHealth);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif'
      }}>
        Loading environment information...
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px',
        fontSize: '2.5em'
      }}>
        🌟 Environment Dashboard
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Environment Information */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>🌍 Environment Details</h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>Message:</strong> {environmentInfo.message}</p>
            <p><strong>Timestamp:</strong> {environmentInfo.timestamp}</p>
            <p><strong>Platform:</strong> {environmentInfo.environment.platform}</p>
            <p><strong>Language:</strong> {environmentInfo.environment.language}</p>
            <p><strong>Screen Resolution:</strong> {environmentInfo.environment.screenResolution}</p>
            <p><strong>Viewport:</strong> {environmentInfo.environment.viewport}</p>
            <p><strong>Online Status:</strong> {environmentInfo.environment.onLine ? '🟢 Online' : '🔴 Offline'}</p>
            <p><strong>Cookies Enabled:</strong> {environmentInfo.environment.cookieEnabled ? '✅ Yes' : '❌ No'}</p>
          </div>
        </div>

        {/* System Information */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>⚙️ System Information</h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>Timezone:</strong> {environmentInfo.system.timezone}</p>
            <p><strong>Date & Time:</strong> {environmentInfo.system.dateTime}</p>
            <p><strong>Current URL:</strong> {environmentInfo.system.url}</p>
            <p><strong>Referrer:</strong> {environmentInfo.system.referrer}</p>
            <p><strong>Package Name:</strong> {environmentInfo.package.name}</p>
            <p><strong>Package Version:</strong> {environmentInfo.package.version}</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>📊 Performance Metrics</h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>Status:</strong> <span style={{ color: systemHealth.status === 'healthy' ? 'green' : 'red' }}>
              {systemHealth.status === 'healthy' ? '🟢 Healthy' : '🔴 Unhealthy'}
            </span></p>
            <p><strong>Load Time:</strong> {systemHealth.metrics.performance.loadTime}</p>
            {systemHealth.metrics.performance.memory !== 'Not available' && (
              <>
                <p><strong>Memory Used:</strong> {systemHealth.metrics.performance.memory.used}</p>
                <p><strong>Memory Total:</strong> {systemHealth.metrics.performance.memory.total}</p>
                <p><strong>Memory Limit:</strong> {systemHealth.metrics.performance.memory.limit}</p>
              </>
            )}
          </div>
        </div>

        {/* User Agent Details */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>🌐 Browser Information</h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>User Agent:</strong></p>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '10px', 
              borderRadius: '5px',
              fontSize: '12px',
              wordBreak: 'break-all'
            }}>
              {environmentInfo.environment.userAgent}
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontSize: '16px', color: '#666' }}>
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default HelloFromFrontend; 
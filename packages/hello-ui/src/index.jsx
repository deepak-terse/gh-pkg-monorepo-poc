import { useState, useEffect } from 'react';

/**
 * React component that displays real environment and system information in a dashboard UI.
 *
 * @component
 * @returns {JSX.Element} The rendered dashboard UI.
 */
function HelloFromFrontend() {
  /**
   * @typedef {Object} EnvironmentInfo
   * @property {string} userAgent
   * @property {string} platform
   * @property {string} language
   * @property {boolean} cookieEnabled
   * @property {boolean} onLine
   * @property {string} screenResolution
   * @property {string} viewport
   * @property {string} timezone
   * @property {string} dateTime
   * @property {string} url
   * @property {string} referrer
   */
  const [environmentInfo, setEnvironmentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        dateTime: new Date().toLocaleString(),
        url: window.location.href,
        referrer: document.referrer || 'Direct access',
      };
      setEnvironmentInfo(info);
      setLoading(false);
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
      maxWidth: '800px',
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
        gridTemplateColumns: '1fr',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>🌍 Environment & System Details</h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>User Agent:</strong> {environmentInfo.userAgent}</p>
            <p><strong>Platform:</strong> {environmentInfo.platform}</p>
            <p><strong>Language:</strong> {environmentInfo.language}</p>
            <p><strong>Screen Resolution:</strong> {environmentInfo.screenResolution}</p>
            <p><strong>Viewport:</strong> {environmentInfo.viewport}</p>
            <p><strong>Online Status:</strong> {environmentInfo.onLine ? '🟢 Online' : '🔴 Offline'}</p>
            <p><strong>Cookies Enabled:</strong> {environmentInfo.cookieEnabled ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Timezone:</strong> {environmentInfo.timezone}</p>
            <p><strong>Date & Time:</strong> {environmentInfo.dateTime}</p>
            <p><strong>Current URL:</strong> {environmentInfo.url}</p>
            <p><strong>Referrer:</strong> {environmentInfo.referrer}</p>
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
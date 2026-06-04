import { useEffect, useState, useCallback, useRef } from 'react';

interface UseWebSocketResult {
  connected: boolean;
  send: (data: unknown) => void;
  close: () => void;
  subscribe: (channel: string, callback: (data: any) => void) => void;
}

export const useWebSocket = (): UseWebSocketResult | null => {
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const subscribersRef = useRef<Map<string, (data: any) => void>>(new Map());

  useEffect(() => {
    try {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const url = `${protocol}//${window.location.host}/ws`;
      
      const ws = new WebSocket(url);

      ws.onopen = () => {
        setConnected(true);
        wsRef.current = ws;
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const channel = data.channel || 'default';
          const callback = subscribersRef.current.get(channel);
          if (callback) {
            callback(data);
          }
        } catch (err) {
          console.error('Failed to parse WebSocket message:', err);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        setConnected(false);
        wsRef.current = null;
      };

      return () => {
        ws.close();
      };
    } catch (err) {
      console.error('Failed to connect WebSocket:', err);
      return undefined;
    }
  }, []);

  const send = useCallback((data: unknown) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(data));
    }
  }, []);

  const close = useCallback(() => {
    wsRef.current?.close();
  }, []);

  const subscribe = useCallback((channel: string, callback: (data: any) => void) => {
    subscribersRef.current.set(channel, callback);
  }, []);

  return { connected, send, close, subscribe };
};
}

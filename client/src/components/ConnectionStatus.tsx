import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testServerConnection } from '@/lib/api';
import { useLanguage } from '@/contexts/LanguageContext';
import { CircleCheck, CircleX, RefreshCw } from 'lucide-react';

/**
 * 서버 연결 상태를 표시하는 컴포넌트
 */
export default function ConnectionStatus() {
  const { t } = useLanguage();
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>(() => t('connectionCheckingMessage'));
  const [isChecking, setIsChecking] = useState<boolean>(false);

  // 서버 연결 상태 확인
  const checkConnection = async () => {
    setIsChecking(true);
    try {
      const { connected, message } = await testServerConnection();
      setIsConnected(connected);
      setMessage(message);
    } catch (error) {
      setIsConnected(false);
      setMessage(`${t('connectionCheckErrorPrefix')}${String(error)}`);
    } finally {
      setIsChecking(false);
    }
  };

  // 컴포넌트 마운트 시 연결 상태 확인
  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <Card className="ancient-border manuscript-page rounded-lg mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-cinzel text-viking-brown flex items-center gap-2">
          <span>{t('connectionStatusTitle')}</span>
          {isConnected === null ? (
            <Badge variant="outline" className="bg-gray-100">{t('connectionStatusChecking')}</Badge>
          ) : isConnected ? (
            <Badge variant="outline" className="bg-green-100 text-green-800">{t('connectionStatusConnected')}</Badge>
          ) : (
            <Badge variant="outline" className="bg-red-100 text-red-800">{t('connectionStatusDisconnected')}</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-sm text-text-brown-light mb-3">
          <div className="flex items-center gap-2">
            {isConnected === null ? (
              <div className="w-5 h-5 border-2 border-viking-brown border-t-transparent rounded-full animate-spin"></div>
            ) : isConnected ? (
              <CircleCheck className="w-5 h-5 text-green-600" />
            ) : (
              <CircleX className="w-5 h-5 text-red-600" />
            )}
            <span>{message}</span>
          </div>
        </div>
        <div className="text-xs text-text-brown-light">
          {t('localApiServerLabel')} <code className="bg-parchment-darker px-1 py-0.5 rounded">http://localhost:5000/api</code>
        </div>
        <div className="mt-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={checkConnection}
            disabled={isChecking}
            className="text-xs h-8"
          >
            {isChecking ? (
              <>
                <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin mr-1"></div>
                {t('connectionCheckingButton')}
              </>
            ) : (
              <>
                <RefreshCw className="w-3 h-3 mr-1" />
                {t('connectionRecheckButton')}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

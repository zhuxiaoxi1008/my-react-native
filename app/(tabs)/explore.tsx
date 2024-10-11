import { useEffect, useRef } from 'react';

import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  const onShouldStartLoadWithRequest = (event) => {
    return true;
  };

  return <WebView source={{ uri: 'https://www.baidu.com/' }}
  onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} />;
};

export default MyWebView
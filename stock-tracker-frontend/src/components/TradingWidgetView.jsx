    import React, { useEffect, useRef, memo } from 'react';
    import "./TradingWidgetView";


    function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
        {
            "width": "890",
            "height": "610",
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "details": true,
            "hotlist": true,
            "calendar": false,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650"
        }`;
        container.current.appendChild(script);

        return () => {
        if (container.current) {
            container.current.innerHTML = '';
        }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
        
        <div id='tradingview_33f9'></div>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
            <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
            className='full-view'
            >
            <span className="blue-text">Track all markets on TradingView</span>
            </a>
        </div>
        </div>
    );
    }

    export default memo(TradingViewWidget);

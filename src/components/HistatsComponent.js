import { useEffect } from 'react';

function HistatsComponent() {
    useEffect(() => {
        // Initialize the _Hasync array if it doesn't exist
        window._Hasync = window._Hasync || [];

        // Push configurations to the _Hasync array
        window._Hasync.push(['Histats.start', '1,4842097,4,6,200,40,00011111']);
        window._Hasync.push(['Histats.fasi', '1']);
        window._Hasync.push(['Histats.track_hits', '']);
        window._Hasync.push(['Histats.framed_page', '']);

        // Create script element
        const hs = document.createElement('script');
        hs.type = 'text/javascript';
        hs.async = true;
        hs.src = '//s10.histats.com/js15_as.js';

        // Append the script to either head or body
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);

        // Optional: Cleanup on component unmount
        return () => {
            // Remove script and cleanup global variables if necessary
            document.body.removeChild(hs);
            // Note: Cleanup for global variables might be needed if they interfere with your app
        };
    }, []); // Empty array ensures this runs only once after the component mounts

    return (
        <noscript>
            <a href="/" target="_blank">
                <img src="//sstatic1.histats.com/0.gif?4842097&101" alt="website statistics" border="0" />
            </a>
        </noscript>
    );
}

export default HistatsComponent;

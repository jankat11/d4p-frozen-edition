import React from "react";
import Script from "next/script";
const GoogleAnalytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-3R2FR3VJLC"
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-3R2FR3VJLC");
        `,
      }}
    ></Script>
  </>
);

export default GoogleAnalytics;
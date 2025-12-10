import { useEffect } from "react";

export default function AdsBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-8 px-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7110750398124296"
        data-ad-slot="8723952140"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
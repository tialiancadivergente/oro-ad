import Script from "next/script";

interface BuzzleadFormScriptsProps {
  campaignId?: string;
}

export default function BuzzleadFormScripts({
  campaignId = "L1Z1",
}: BuzzleadFormScriptsProps) {
  return (
    <>
      <Script id="buzzlead-campaign-id" strategy="afterInteractive">
        {`window.campaignId = '${campaignId}';`}
      </Script>
      <Script
        id="buzzlead-form-widget"
        src="https://static.buzzlead.com.br/form-widget.js"
        strategy="afterInteractive"
      />
      <Script
        id="buzzlead-tracker"
        src="https://static.buzzlead.com.br/tracker.js"
        strategy="afterInteractive"
      />
    </>
  );
}

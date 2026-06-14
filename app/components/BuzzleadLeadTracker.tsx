import Script from "next/script";

const BUZZLEAD_INIT = `!function(e,t,i){function r(){e.fireTrigger(e.blId,e.blEvent)}var n;e.blEvent="lead",e.blId=i,e.Tracker?r():(n=t.getElementsByTagName("script")[0],(t=t.createElement("script")).src="https://static.buzzlead.com.br/tracker.js",t.onload=r,n.parentNode.insertBefore(t,n))}(window,document,"BL-68751d590cc8dca2c54723f9-L1Z1");`;

export default function BuzzleadLeadTracker() {
  return (
    <Script
      id="buzzlead-lead-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: BUZZLEAD_INIT }}
    />
  );
}

import Script from "next/script";

export default function WaitlistForm() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/31a9Ng?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        height="216"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        style={{
          paddingLeft: "auto",
          paddingRight: "auto",
          width: "100%",
          maxWidth: "400px",
        }}
      ></iframe>

      <Script src="https://tally.so/widgets/embed.js" />
    </>
  );
}

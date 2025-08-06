import { Box } from "@mantine/core";
import Script from "next/script";


export default function WaitlistForm() {
  return (
    <Box>
      <iframe
        data-tally-src="https://tally.so/embed/31a9Ng?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="216"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      ></iframe>

      <Script src="https://tally.so/widgets/embed.js" />
    </Box>
  );
}

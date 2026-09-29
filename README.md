# QR Code Generator

Turn a web address into a QR code and download it as a PNG. This is a single-file static app: the HTML, styles, and application JavaScript live in [index.html](index.html).

**[Open the live demo](https://qr-generator-indol-two-20.vercel.app/)**

## Run locally

Download or clone this repository, then open `index.html` in a browser. There is no package installation or build step.

An internet connection is needed to load QRCode.js, Google Fonts, Phosphor icons, and the example-link logos from their external hosts. To test sharing, use the HTTPS demo; browser support and secure-context requirements vary.

## Use the generator

1. Enter an HTTP or HTTPS web address, such as `https://example.com`. An address without a scheme, such as `example.com`, gets an HTTPS prefix.
2. Select **Generate QR Code** or press Enter.
3. Select **Download** to save a PNG named after the destination host, for example `qr-example.com.png`.
4. Scan the downloaded image with a phone and check the destination before printing or distributing it.

The **Website**, **WhatsApp**, **YouTube**, and **Location** example buttons generate a QR code immediately. Replace example destinations with your own URL before using the result.

**Clear URL** clears the input; it does not remove the previously generated QR code. Generate again after changing the address so the downloaded image matches your latest input.

## Sharing

The app tries to share the PNG through the browser's native share interface. If file sharing is unavailable, it tries to share the URL. If native sharing is unavailable, it attempts to copy the URL and shows a status message. Support depends on the browser and device.

## Supported addresses and limitations

- Only HTTP and HTTPS addresses are accepted.
- The hostname must contain a dot; bare `localhost` is rejected by the current validation.
- This interface generates URL QR codes, not Wi-Fi credentials or contact cards.
- The QR image is generated in the browser. The app does not implement an upload endpoint or persistent storage for entered URLs; it still requests the external assets listed above.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| The address is rejected | Use a valid HTTP(S) address with a dotted hostname. |
| Generation stays on “Generating…” | Check whether the QRCode.js CDN was blocked or failed to load, then reload. |
| Share does not open a share sheet | Use Download, or use the copied URL if the app reports that fallback. |
| The downloaded QR contains the previous address | Generate a new QR after editing or clearing the input. |

## Manual verification

After changing the app, check a valid URL, a schemeless domain, an empty input, and an unsupported scheme. Try each example button, download a PNG and scan it, and check the share fallback on a browser without native sharing. Verify keyboard focus, a narrow viewport, and reduced-motion settings.

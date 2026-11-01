# Booking form embed (LeadConnector / GoHighLevel)

The free-consultation booking calendar. Use this exact code wherever the booking form is embedded
(it is already used in `site/src/components/ContactBand.astro`).

```html
<!-- Booking widget (LeadConnector). form_embed.js resizes the iframe to its content. -->
<div class="booking">
  <iframe src="https://api.leadconnectorhq.com/widget/booking/PtfPVxonsWeiroiaMa1y"
          style="width: 100%;border:none;overflow: hidden;" scrolling="no"
          id="PtfPVxonsWeiroiaMa1y_1761187771648"
          title="Book a consultation with integPRO"></iframe>
</div>
<script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
```

In Astro, add `is:inline` to the `<script>` tag so it is not bundled.

## Conversion tracking
- After booking, the calendar must redirect to `https://www.integpro.com.au/thank-you`, which sends the GA4
  `booking_complete` event (the Google Ads conversion).
- The **whole page** must go to `/thank-you`, not only the frame; otherwise Google Ads may not credit the ad click.
  Check with a test booking whenever the embed or its settings change.
- `site/src/layouts/Base.astro` forwards booking-widget messages to GTM (only when `gtmId` is set).

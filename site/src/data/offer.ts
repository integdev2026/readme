// Year-end ISO integrated management system offer (ISO pages only: never on DISP pages).
// The offer shows until the end of `endsOn` (Sydney time) and switches itself off after that,
// both on the server and in the browser. Change or extend it here only.
export const isoOffer = {
  id: 'iso-3for2-2026',
  endsOn: '2026-12-31',
  endsLabel: '31 December 2026',
  endsShort: '31 December',
};

// End of the last day in Sydney (AEDT, UTC+11 in December).
export const isoOfferEndsAt = new Date(`${isoOffer.endsOn}T23:59:59+11:00`);
export const isoOfferActive = (now = new Date()) => now <= isoOfferEndsAt;

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

export function trackEvent(_event: AnalyticsEvent) {
  // Placeholder: wire to your analytics provider (GA4, Segment, RudderStack, etc.)
}

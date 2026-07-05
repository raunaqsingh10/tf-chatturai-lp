"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { captureTrackingParams, getFlatStoredTrackingParams } from "@/lib/tracking";

type CalConfig = Record<string, string | Record<string, string>>;

const namespace = "brand-film-strategy-call-chatturai";
const calLink = "chatturai/brand-film-strategy-call-chatturai";

function buildCalConfig(): CalConfig {
  captureTrackingParams();

  const trackingParams = getFlatStoredTrackingParams("latest_touch");

  return {
    layout: "month_view",
    useSlotsViewOnSmallScreen: "true",
    theme: "light",
    ...trackingParams,
  };
}

export default function CalBooking() {
  const [config, setConfig] = useState<CalConfig | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      setConfig(buildCalConfig());
    });

    (async function initCal() {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#15130f",
          },
          dark: {
            "cal-brand": "#f3f0e9",
          },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  if (!config) {
    return <div className="cal-inline" style={{ minHeight: 160 }} />;
  }

  return (
    <Cal
      className="cal-inline"
      namespace={namespace}
      calLink={calLink}
      config={config}
      style={{ width: "100%", overflow: "visible" }}
    />
  );
}

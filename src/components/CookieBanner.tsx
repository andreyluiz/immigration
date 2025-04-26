"use client";

import { useTranslations } from "next-intl";
import CookieConsent from "react-cookie-consent";

export const CookieBanner = () => {
  const t = useTranslations("cookie_consent");

  return (
    <CookieConsent location="bottom" buttonText={t("accept")}>
      {t("title")}
    </CookieConsent>
  );
};

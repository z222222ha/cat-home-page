import Hero from "@/components/home/Hero";
import IconCloudDemo from "@/components/home/IconCloud";
import JoinUs from "@/components/home/JoinUs";
import ScrollingCats from "@/components/home/ScrollingCats";
import SocialProof from "@/components/home/SocialProof";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      <IconCloudDemo />
      <ScrollingCats locale={dict.Cats} />

      <JoinUs />
      {/* display technology stack, partners, project honors, etc. */}
      {/* <ScrollingLogos /> */}

      {/* Showcase */}
      {/* <Showcase id="Showcase" locale={dict.Showcase} /> */}

      {/* USP (Unique Selling Proposition) */}
      {/* <Feature id="Features" locale={dict.Feature} langName={langName} /> */}

      {/* Pricing */}
      {/* <Pricing id="Pricing" locale={dict.Pricing} langName={langName} /> */}

      {/* Testimonials */}
      {/* <Testimonials id="Testimonials" locale={dict.Testimonials} /> */}

      {/* FAQ (Frequently Asked Questions) */}
      {/* <FAQ id="FAQ" locale={dict.FAQ} langName={langName} /> */}

      {/* CTA (Call to Action) */}
      {/* <CTA locale={dict.CTA} CTALocale={dict.CTAButton} /> */}
    </>
  );
}

import { LineText } from "@/components/LineText";
import { AuroraText } from "@/components/magicui/aurora-text";
import * as motion from "motion/react-client";

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            damping: 10, // if spring
            stiffness: 50, // if spring
            restDelta: 0.001, // if spring
          },
        }}
      >
        <section
          lang={langName}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2 pt-16 md:pt-2 text-center"
        >
          {/* <h1>
            {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
          </h1> */}
          <h1>
            {locale.title1} <AuroraText>{locale.title2}</AuroraText>
          </h1>
          <p className="mx-auto mt-12 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
            {/* {siteConfig.description} */}
            <span>{locale.description1}</span>
            <LineText>{locale.description2}</LineText>
          </p>
        </section>
      </motion.div>
      {/* <CTAButton locale={CTALocale}></CTAButton> */}
      {/* <Button>click meeee！</Button> */}
    </>
  );
};

export default Hero;

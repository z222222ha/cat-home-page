import { Makers } from "@/config/makers";
import * as motion from "motion/react-client";
import Image from "next/image";

const SocialProof = ({ locale }: { locale: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
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
      <section className="flex flex-col items-center justify-center gap-20 pt-16">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center justify-center">
            {Makers.map((user, index) => {
              return (
                <Image
                  key={index}
                  src={user.image}
                  alt="User"
                  height={40}
                  width={40}
                  className="rounded-full -m-[5px] border border-white"
                />
              );
            })}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            <span className="text-primary font-semibold text-base">1000+</span>{" "}
            {locale.maker}
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default SocialProof;

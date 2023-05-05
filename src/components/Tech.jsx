import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          I Have Workd With these
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 group" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <motion.p
              variants={textVariant()}
              className="text-center hidden transition ease-in-out 2s group-hover:block "
            >
              <p className={`${styles.sectionSubText} text-center`}>
                {" "}
                {technology.name}{" "}
              </p>
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

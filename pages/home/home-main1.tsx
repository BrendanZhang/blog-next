import { motion } from "framer-motion";
import { scaleAndFade } from "../../components/common/animation";

const HomeMain1 = () => {
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={scaleAndFade}
  >
    <div className="home">这里是main</div>
  </motion.div>;
};
export default HomeMain1;

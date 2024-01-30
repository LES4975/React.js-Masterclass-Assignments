import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 600px;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  initial: {
    scale: 1,
  },
  hover: (custom: number) => ({
    scale: 1.1,
    transformOrigin: custom > 0 ? "bottom right" : "top left",
  }),
};

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Circle = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  height: 50px;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Switch = styled(motion.button)`
  background-color: #ffffff;
  border-style: none;
  width: 70px;
  height: 35px;
  border-radius: 5px;
  margin-top: 50px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const switchVariants = {
  blueMode: { scale: 1.0, color: "#2c43c7" },
  orangeMode: { scale: 1.2, color: "orange" },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const custom = 1;
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          custom={1}
          variants={boxVariants}
          initial="inactive"
          whileHover="hover"
          onClick={() => setId("1")}
          key={"1"}
          layoutId={"1"}
        />
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          custom={-1}
          variants={boxVariants}
          initial="inactive"
          whileHover="hover"
          onClick={() => setId("4")}
          key={"4"}
          layoutId={"4"}
        />
      </Grid>
      <Switch
        animate={!clicked ? "blueMode" : "orangeMode"}
        onClick={toggleClicked}
        variants={switchVariants}
        whileTap="click"
      >
        Switch
      </Switch>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 300,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

import React, { useState } from "react";

import { motion } from "framer-motion";

import { IconMinus, IconPlus } from "../assets/Icons";

import "../Styles/QuestionCard.css";
const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="Question__Card">
      <div className="Question__Text">
        <h3>{props.question}</h3>
        <motion.button
          className="Action__Button"
          onClick={() => setShowAnswer(!showAnswer)}
          initial={{ rotate: 0 }}
          animate={showAnswer ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {showAnswer ? <IconMinus /> : <IconPlus />}
        </motion.button>
      </div>
      <motion.div
        className="Answer__Container"
        initial={{ height: 0 }}
        animate={{ height: showAnswer ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        exit={{ height: 0 }}
      >
        <p>{props.answer}</p>
      </motion.div>
    </div>
  );
};

export default Question;

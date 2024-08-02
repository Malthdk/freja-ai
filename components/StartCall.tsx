"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function StartCall() {
  return (
    <AnimatePresence>
      <motion.div
        className={"inset-0 p-4 flex items-center justify-center bg-background"}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      >
        <AnimatePresence>
          <motion.div
            variants={{
              initial: { scale: 0.5 },
              enter: { scale: 1 },
              exit: { scale: 0.5 },
            }}
          >
            <Button
              className={"z-50 flex items-center gap-1.5"}
              onClick={() => {}}
            >
              <span>
                <Phone
                  className={"size-4 opacity-50"}
                  strokeWidth={2}
                  stroke={"currentColor"}
                />
              </span>
              <span>Start Call</span>
            </Button>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export type FormData = {
  name: string;
  email: string;
  message?: string;
  workplace: string;
  phone: string;
};

export const Contact = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="max-w-sm flex flex-col gap-4 text-white">
      <h2 className="text-2xl  text-bold">Tilmeld dig vores venteliste</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Fulde Navn"
            {...register("name", { required: true })}
          />
          <Input
            type="email"
            placeholder="Emailadresse"
            {...register("email", { required: true })}
          />
          <Input
            type="text"
            placeholder="Virksomhed"
            {...register("workplace", { required: false })}
          />
          <Input
            type="text"
            placeholder="Telefon nr."
            {...register("phone", { required: false })}
          />
          <Textarea
            placeholder="Eventuel besked"
            {...register("message", { required: false })}
          />
        </div>
        <div>
          <AnimatePresence>
            {formState.isSubmitSuccessful && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-100 mt-4"
                transition={{ duration: 0.3 }}
              >
                Tak for din tilmelding
              </motion.div>
            )}
            {!formState.isSubmitSuccessful && (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="default"
                  type="submit"
                  className="hover:shadow-form mt-4"
                  disabled={formState.isSubmitting}
                >
                  Tilmeld venteliste
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
};

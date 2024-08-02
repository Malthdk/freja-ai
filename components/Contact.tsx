"use client";

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
  const { register, handleSubmit } = useForm<FormData>();

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
          <Button
            variant="default"
            type="submit"
            className="hover:shadow-form  mt-4"
          >
            Tilmeld venteliste
          </Button>
        </div>
      </form>
    </div>
  );
};

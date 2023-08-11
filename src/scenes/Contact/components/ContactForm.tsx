import { Input } from "@/components/atoms/Input";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

import {
  ContactForm as ContactFormT,
  ContactFormSchema,
} from "@/types/forms/contact";
import { TextArea } from "@/components/atoms/Textarea";
import { Button } from "@/components/atoms/Button";

const ContactForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormT>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormT> = async (data) => {};

  return (
    <form className="bg-gray-50 border border-gray-200 rounded-2xl p-4 xl:p-8 shadow-sm">
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <Input
          id="firstName"
          label="First Name"
          type="text"
          defaultValue=""
          isValid={!!!errors.firstname && watch("firstname") !== ""}
          hasError={!!errors.firstname}
          {...register("firstname")}
        />
        <Input
          id="lastName"
          label="Last Name"
          type="text"
          defaultValue=""
          isValid={!!!errors.lastname && watch("lastname") !== ""}
          hasError={!!errors.lastname}
          {...register("lastname")}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <Input
          id="email"
          label="Email Address"
          type="email"
          defaultValue=""
          isValid={!!!errors.email && watch("email") !== ""}
          hasError={!!errors.email}
          {...register("email")}
        />
        <Input
          id="subject"
          label="Subject"
          type="text"
          defaultValue=""
          isValid={!!!errors.subject && watch("subject") !== ""}
          hasError={!!errors.subject}
          {...register("subject")}
        />
      </div>

      <TextArea
        id="message"
        label="Your Message"
        rows={5}
        defaultValue=""
        hasError={!!errors.message}
        {...register("message")}
      />

      <Button type="submit" className="mt-6">
        Submit
      </Button>
    </form>
  );
};

export { ContactForm };

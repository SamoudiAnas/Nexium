import { Input } from "@/components/atoms/Input";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ContactForm as ContactFormT,
  ContactFormSchema,
} from "@/types/forms/contact";
import { TextArea } from "@/components/atoms/Textarea";
import { Button } from "@/components/atoms/Button";
import { useEffect } from "react";
import { InputError } from "@/components/atoms/InputError";
import { isDirty } from "zod";

const ContactForm = () => {
  const {
    watch,
    trigger,
    getFieldState,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormT>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormT> = async (data) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-50 border border-gray-200 rounded-2xl p-4 xl:p-8 shadow-sm"
    >
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <div>
          <Input
            id="firstName"
            label="First Name"
            type="text"
            defaultValue=""
            isValid={!!!errors.firstname && getFieldState("firstname").isDirty}
            hasError={!!errors.firstname}
            {...register("firstname")}
          />
          {errors.firstname && (
            <InputError message={errors.firstname.message ?? ""} />
          )}
        </div>
        <div>
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            defaultValue=""
            isValid={!!!errors.lastname && getFieldState("lastname").isDirty}
            hasError={!!errors.lastname}
            {...register("lastname")}
          />
          {errors.lastname && (
            <InputError message={errors.lastname.message ?? ""} />
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <div>
          <Input
            id="email"
            label="Email Address"
            type="email"
            defaultValue=""
            isValid={!!!errors.email && getFieldState("email").isDirty}
            hasError={!!errors.email}
            {...register("email")}
          />
          {errors.email && <InputError message={errors.email.message ?? ""} />}
        </div>
        <div>
          <Input
            id="subject"
            label="Subject"
            type="text"
            defaultValue=""
            isValid={!!!errors.subject && getFieldState("subject").isDirty}
            hasError={!!errors.subject}
            {...register("subject")}
          />
          {errors.subject && (
            <InputError message={errors.subject.message ?? ""} />
          )}
        </div>
      </div>
      <TextArea
        id="message"
        label="Your Message"
        rows={5}
        defaultValue=""
        isValid={!!!errors.message}
        hasError={!!errors.message}
        {...register("message")}
      />
      {errors.message && <InputError message={errors.message.message ?? ""} />}
      <Button type="submit" className="mt-6">
        Submit
      </Button>
    </form>
  );
};

export { ContactForm };

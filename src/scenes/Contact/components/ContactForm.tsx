import { Input } from "@/components/atoms/Input";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

import {
  ContactForm as ContactFormT,
  ContactFormSchema,
} from "@/types/forms/contact";

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
    <form>
      <div className="grid md:grid-cols-2 gap-3"></div>
    </form>
  );
};

export { ContactForm };

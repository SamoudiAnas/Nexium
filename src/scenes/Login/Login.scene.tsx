import { EyeNoneIcon, EyeOpenIcon, CheckIcon } from "@radix-ui/react-icons";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

import { LoginForm, LoginFormSchema } from "@/types/forms/auth/login";

import { Loader } from "@/components/atoms/Loader";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Logo } from "@/components/atoms/Logo";

import { useLoginMutation } from "@/features/user/user-slice";
import { useRouter } from "next/router";

function Login() {
  const { push } = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [login, { isLoading, status, data: authData, isSuccess }] =
    useLoginMutation({});

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "demo@email.com",
      password: "demo1234",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    await login({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (status === "fulfilled" && isSuccess) {
      push("/");
    }
    // eslint-disable-next-line
  }, [authData, status]);

  return (
    <main className="bg-gray-50 relative flex flex-col justify-center items-center min-h-[calc(100vh_-_3rem)]">
      <div className="w-full max-w-xl p-16 rounded-2xl bg-white shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">
        <Logo
          className="w-24 h-24 block mx-auto mb-4"
          pathClassName="fill-main"
        />
        <h1 className="text-3xl text-dark text-center mb-12 font-semibold">
          Welcome To <span className="text-main">Nexium</span> <br /> Dashboard!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Input
              id="email"
              type="email"
              label="Your Email"
              defaultValue=""
              isValid={!!!errors.email && watch("email") !== ""}
              hasError={!!errors.email}
              withIconAfter={!errors.email && watch("email") !== ""}
              IconAfter={<CheckIcon className="w-6 h-6 text-green-700" />}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger text-sm text-error mt-2 pl-4">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <Input
              id="password"
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              defaultValue=""
              isValid={!!!errors.password && watch("password") !== ""}
              hasError={!!errors.password}
              withIconAfter
              IconAfter={
                isPasswordVisible ? (
                  <button type="button">
                    <span className="sr-only">Mask Password</span>
                    <EyeNoneIcon
                      className="w-6 h-6 text-gray-400 hover:text-main hover:cursor-pointer"
                      onClick={() => {
                        setIsPasswordVisible((prev) => !prev);
                      }}
                    />
                  </button>
                ) : (
                  <button type="button">
                    <span className="sr-only">View Password</span>
                    <EyeOpenIcon
                      className="w-6 h-6 text-gray-400 hover:text-main hover:cursor-pointer"
                      onClick={() => {
                        setIsPasswordVisible((prev) => !prev);
                      }}
                    />
                  </button>
                )
              }
              {...register("password")}
            />
            {errors.password && (
              <p className="text-danger text-sm text-error mt-2 pl-4">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            size="lg"
            className="w-full text-white rounded text-base py-4 hover:cursor-pointer hover:bg-main-hover hover:shadow-[rgba(0,_0,_0,_0.2)_0px_18px_50px_-10px] select-none"
          >
            {isLoading ? (
              <Loader className="stroke-white w-6 h-6" />
            ) : (
              <span>Login</span>
            )}
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Login;

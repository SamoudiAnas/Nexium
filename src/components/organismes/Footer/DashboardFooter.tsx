import { Logo } from "@/components/atoms/Logo";

const DashboardFooter = () => {
  return (
    <footer className="flex justify-center items-center gap-4 h-12 p-2 bg-main">
      <Logo className="rounded w-8 h-8 bg-white" pathClassName="fill-main" />
      <p className="text-white font-semibold mb-0">
        Powered By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://samoudianas.dev"
          className="underline text-white"
        >
          Anas Samoudi
        </a>
      </p>
    </footer>
  );
};

export { DashboardFooter };

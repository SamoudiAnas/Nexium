import { ArrowLeftIcon } from "@radix-ui/react-icons";
import EmptyState from "~/assets/svg/Empty State.svg";

import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-8">
      <EmptyState className="w-full max-w-[30rem]" />

      <h3 className="text-2xl text-center">Oops! Nothing to see here</h3>

      <Link href="/">
        <Button className="flex items-center gap-2 rounded-full">
          <ArrowLeftIcon />
          <span>Back to Home</span>
        </Button>
      </Link>
    </div>
  );
}

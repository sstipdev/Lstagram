// Next
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

// Components
import Signin from "@/components/Signin";

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  // getProviders null을 반환 할수가 있음 null 이라면 기본 텅빈 record를 반환
  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

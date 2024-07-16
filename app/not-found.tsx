import Link from "next/link";
export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col  text-center py-48 md:py-64 lg:py-80 bg-dark-background text-white">
      <h2 className="text-3xl ">Page is not found</h2>
      <p className="pb-10">Could not find requested resource</p>
      <Link className="text-aevum-blue text-xl underline" href="/">
        Return Home
      </Link>
    </div>
  );
}

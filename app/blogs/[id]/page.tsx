export const dynamic = "force-static";
export const dynamicParams = false;
export const runtime = "edge";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <h1>{id}</h1>;
}

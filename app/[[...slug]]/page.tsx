import {headers} from "next/headers";
import {notFound} from "next/navigation";
import {App} from "../../src/StoreApp";
export const dynamicParams=true;
export const dynamic="force-dynamic";
export function generateStaticParams(){return [{"slug": []}, {"slug": ["food"]}, {"slug": ["drinks"]}, {"slug": ["offers"]}, {"slug": ["app"]}, {"slug": ["scan-and-go"]}, {"slug": ["receipts"]}, {"slug": ["stores"]}, {"slug": ["find-a-store"]}, {"slug": ["privacy"]}, {"slug": ["terms"]}, {"slug": ["accessibility"]}, {"slug": ["about"]}];}
const generatedPaths = new Set(generateStaticParams().map(({slug}) => "/" + slug.join("/")));
export default async function Page({params}: {params: Promise<{slug?: string[]}>}) {
  const {slug = []} = await params;
  if (!generatedPaths.has("/" + slug.join("/")) && !(await headers()).get("accept")?.includes("text/html")) notFound();
  return <App/>;
}

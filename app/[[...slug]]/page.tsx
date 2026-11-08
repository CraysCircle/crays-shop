import {App} from "../../src/StoreApp";
export const dynamicParams=false;
export function generateStaticParams(){return [{"slug": []}, {"slug": ["food"]}, {"slug": ["drinks"]}, {"slug": ["offers"]}, {"slug": ["app"]}, {"slug": ["scan-and-go"]}, {"slug": ["receipts"]}, {"slug": ["stores"]}, {"slug": ["find-a-store"]}, {"slug": ["privacy"]}, {"slug": ["terms"]}, {"slug": ["accessibility"]}, {"slug": ["about"]}];}
export default function Page(){return <App/>;}

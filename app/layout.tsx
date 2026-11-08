import type {Metadata} from "next";
import type {ReactNode} from "react";
import "./styles.css";
export const metadata:Metadata={title:"Crays Store — In fast. Out easy.",description:"Crays Store — fresh food, drinks, offers and a faster way to shop.",icons:{icon:"/assets/crays-mark.svg"}};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>;}

import type {Metadata} from "next";
import {App} from "../../src/StoreApp";
import {AccountEntry} from "../../src/account-entry/AccountEntry";
import styles from "./shop-account-frame.module.css";

export const metadata: Metadata = {
  title: "Account & Sign-in | CRAYS Store",
  description: "One secure CRAYS account for your world, services and member support.",
  alternates: {canonical: "https://www.crays.shop/account"},
};

// The common service owns Auth0 state, cookies and server-side entitlements.
// No URL input can change the destination host or grant a role.
const links = Object.freeze({
  login: "https://member.crays.world/auth/login",
  signup: "https://member.crays.world/auth/login?screen_hint=signup",
  team: "https://member.crays.world/work/auth/login",
});

export default function ShopAccountPage() {
  return <App pageContent={<div className={styles.frame}><AccountEntry locale="en" links={links} header={null}/></div>}/>;
}

Scope: required shared anonymous account entry in the own Shop Next.js migration candidate. This is an internal QA record, not a production handoff.

Source visual truth: /home/craysdev/.codex/attachments/a75294c0-6493-4dea-b9bc-054c27c24da9/codex-clipboard-a18d917d-a250-46bb-98fb-0c61207180d5.png. Existing Store brand/landing reference: /home/craysdev/.codex/attachments/b0d4f86e-91c1-4e4d-bcfc-db2e56341fc8/codex-clipboard-a5b3bdde-bea7-47ce-8656-96e46c3fc36b.png, opened; full public landing comparison at its1425x990viewport remains a separate site-wide acceptance item.

Implementation: ../shop-account-integration-20261105-03/02-account-desktop.png (real full-page browser screenshot), 04-account-mobile.png and 05-account-mobile-menu.png. State anonymous, desktop menu closed; original Store utility bar/header/footer retained. Desktop CSSviewport1920x945, density1. Mobile390x844, density1; mobile reference not supplied, so no invented mobile pixel parity.

Comparison evidence opened together: comparison-entry-body.png (full shared entry) and comparison-account-panel.png (focused). Source browser chrome87px cropped. Source shared entry crop1295x770 at305,121; actual crop1295x770 at312,186. The7px centered horizontal offset is from the reference's15px Windows scrollbar;65px vertical offset is the intentionally retained132px Store header versus67px Club header. No scaling or stretching. This normalization compares the requested shared component while preserving Store branding.

Corrections and post-fix evidence:

- Initial integration used a compressed705px story image under the larger Store header. Restored the shared entry770px story height without changing the Store utility bar/header.
- Initial menu-close probe sampled the existing240ms transition before it completed. Probe now waits for the real max-height endpoint; no fabricated visibility result.
- Closed Store menu links were still reachable in original markup. Added inert/aria-hidden state, Escape handling and focus return, keeping original appearance and transition. Real mobile opening, closing, Escape, focus and inert checks pass.
- Post-fix build ../SHOP_ACCOUNT_NEXT_PRODUCTION_BUILD_ATTEMPT02_20261105_ACTUAL.json passes. Final browser evidence BROWSER_ACTUAL.json contains38checks, no console/page exceptions or failed local assets. All14existing route URLs still answer200; /account now shows the common entry and /en/account is added.

Required fidelity surfaces:

- Fonts/typography: original shared Avenir font files and explicit heading/button sizing/tracking preserved, account isolated from Store's Inter/Bebas theme. Headline wrapping and panel copy inspected; OS rasterization is not claimed pixel-identical.
- Spacing/layout:770px image and534px panel geometry match the reference component; four explanation cards, three actions and trust note inspected. Mobile stacks actions above the original photograph/cards with no horizontal overflow.
- Colors/tokens: original white panel, navy text, pink primary action, pale border/shadow and source photo treatment retained.
- Images/assets: original marina JPEG and original font payloads, same supplied shared component; no regenerated or approximated photograph/logo. Store logo/header and storefront assets remain original.
- Copy: original account headline, explanatory cards, support copy, Log in/Team Login/Create account and security note retained.

Full-story boundary OPEN: fixed links target https://member.crays.world, whose real HTTPS gateway and Auth0 callbacks are not activated yet. No successful customer login, role/tenant authorization or AWS updated Shop deployment is claimed. Only earlier World update is on AWS; this Shop change is an own qualified candidate. All six websites/global cutover remains unaccepted.

final result: passed

Native AWS follow-through2026-11-05: output/aws-inventory-20261104/aws-foundation/standing-access-foundation-20261105-01/SHOP_ACCOUNT_NATIVE_AWS_PRIVATE_RUNTIME_20261105_ACTUAL.json. Updated private candidate actually running; old exact own container stopped/PID0 retained. Required route and static artifact HTTP hashes passed. Public DNS and authenticated customer-flow gates remain open. Earlier candidate-only deployment statements above describe the pre-transfer QA snapshot.

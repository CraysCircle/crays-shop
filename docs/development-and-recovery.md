# Development and recovery

Read the exact source/artifact index before selecting a source revision. It distinguishes the qualified derived capture, final source changes, original reference material and the recorded AWS release. A preserved intermediate commit is not automatically the intended runtime version.

The original package scripts and direct dependency versions are retained unchanged in package.json. There is no application test pass asserted by this capture. In particular, do not substitute a newly invented npm test/npm ci/start command for what the original package actually defines.

The local build used separately supplied node_modules and borrowed public inputs. [Original local bindings](original-local-bindings.json) records the observed relationships; those former host paths are not a portable recovery mechanism. Original selected public source bodies are now retained at the same logical public paths.

Restore and qualify the exact dependency tree, custom/modified package sources where present, build configuration and remaining licensed media before describing a rebuilt website as equivalent to the recorded artifact. A fresh dependency resolution alone does not establish that equivalence. Binary media/font records not fully bound here remain explicit in remaining-assets.json.

Keep runtime launch/configuration, secret-file bindings and provider/database state with the responsible migration owner. Never copy effective environments, credentials, private keys, customer records, database dumps or private diagnostic logs into this source repository.

Future source changes should preserve original route/provider/document/version relationships, include all required source and notices, and identify the exact resulting Git commit and build artifact. Inspect external deploy triggers before pushing; source publication does not approve a production release.

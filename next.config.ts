import type {NextConfig} from "next";
const config:NextConfig={poweredByHeader:false,images:{unoptimized:true},transpilePackages:["@phosphor-icons/react"],experimental:{cpus:1,webpackMemoryOptimizations:true},webpack(config){config.resolve.alias["@phosphor-icons/react"]="/srv/crays/worktrees/personal-web-runtime-01a183ad/apps/web-runtime/integration/chuck-global-window-v2/dependencies/node_modules/@phosphor-icons/react";return config;}};
export default config;

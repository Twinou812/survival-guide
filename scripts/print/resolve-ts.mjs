import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
export async function resolve(spec, ctx, next) {
  if ((spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('file:')) && !/\.[cm]?[jt]sx?$/.test(spec) && !spec.endsWith('.json')) {
    const url = new URL(spec + '.ts', ctx.parentURL);
    if (existsSync(fileURLToPath(url))) return next(url.href, ctx);
  }
  return next(spec, ctx);
}

// Lets plain Node run the content .ts files (imports without ".ts" extensions).
import { register } from 'node:module';
register('./resolve-ts.mjs', import.meta.url);

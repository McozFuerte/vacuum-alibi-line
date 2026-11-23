import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "I didn't miss that spot. My sensors scanned it twice: there has never been a spot. Whatever you lost there, grieve it privately.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY + '\n');
console.log(ENTRY);

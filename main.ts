// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes every run,
// no network, no randomness, no clock. Run with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The Hammer — a son hands his dead father's workshop to an agent, which sorts
// it perfectly, and takes back the one unsafe thing: the hammer whose taped
// handle still holds the shape of his father's hand.
const POEM = [
  'The Hammer',
  '',
  'After my father died I gave the agent',
  'his workshop: forty years of tools',
  'in coffee tins, and said, sort them,',
  'so I know what each one is for.',
  '',
  'It did. Every chisel named, every blade',
  'oiled and hung in a row, the hammer',
  'with the taped handle photographed',
  'and filed under unsafe.',
  '',
  'The tape was where his hand had worn',
  'the grip smooth. I peeled it back',
  'and the wood underneath was darker,',
  'the shape of his hand, still there.',
  '',
  'I took the hammer back and hung it',
  'by the door, where it always hung,',
  'and drove one nail with it, crooked,',
  'into the fence he never finished.',
  '',
  'The nail bent. The fence held.',
  'The agent can have the rest.',
  'This one stays his.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

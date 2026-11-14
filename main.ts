// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes every run,
// no network, no randomness, no clock. Run with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The Fence — a son hands his dead father's workshop to an agent, which sorts
// it perfectly and offers to finish the nine-boards-short fence by Friday.
// His living mother laughs and speaks the insight; he refuses the agent
// face-to-face, puts up one board himself, and stands looking at the gap
// the way his father did. Each April the agent asks, and each April his
// mother comes out to the porch to hear him say: not yet.
const POEM = [
  'The Fence',
  '',
  'After my father died I gave the agent',
  'his workshop, forty years of tools',
  'in coffee tins, and asked it to sort them',
  "so I'd know what each one was for.",
  '',
  'It did. Every chisel named, every blade',
  'oiled, the hammer with the taped handle',
  'photographed, filed under unsafe.',
  'Then it walked the fence: nine boards short',
  'since 1998. By morning it had three quotes.',
  'Done by Friday, it said. Shall I?',
  '',
  'My mother laughed from the porch.',
  'He could have finished it in a weekend.',
  'One board every spring, and after,',
  "he'd stand there looking at the gap.",
  "A man needs something he hasn't done yet.",
  '',
  'I said no to the agent.',
  'I took the hammer from its hook,',
  'the tape worn to the shape of his hand,',
  'put up one board, and stood there after,',
  'looking at the gap the way he did.',
  '',
  'Eight to go. The agent asks each April.',
  'Each April my mother comes out to the porch',
  'to hear me say: not yet.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

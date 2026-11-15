// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes every run,
// no network, no randomness, no clock. Run with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The Fence (v3) — a son remembers holding the board while his father drove
// three nails and handed him the hammer for the fourth, never straightening
// what he bent. After the father's death the agent sorts the workshop and
// offers to finish the nine-boards-short fence by Friday. His living mother
// laughs and speaks the insight; he refuses the agent face-to-face, puts up
// one board himself — four nails, the last one bent, and left bent — and
// stands looking at the gap the way his father did. Each April the agent
// asks, and each April his mother comes out to hold the board and hear him
// say: not yet.
const POEM = [
  'The Fence',
  '',
  'Every spring my father put up one board.',
  'I held it. He drove three nails,',
  'handed me the hammer for the fourth,',
  'and never straightened what I bent.',
  'Then he\'d stand there, looking at the gap.',
  '',
  'He died with nine boards left.',
  'I gave the agent his workshop, forty years',
  'of tools in coffee tins. It sorted them',
  'in a night, then walked the fence.',
  'By morning it had three quotes.',
  'Done by Friday, it said. Shall I?',
  '',
  'My mother laughed from the porch.',
  'He could have finished that in a weekend,',
  'any year he liked. He liked it open.',
  'A man needs something he hasn\'t done yet.',
  '',
  'I told the agent no.',
  'I took the hammer down, the tape',
  'worn to the shape of his hand,',
  'and put up one board: four nails,',
  'the last one bent, and left bent,',
  'and stood there after, looking at the gap.',
  '',
  'Eight to go. The agent asks each April.',
  'Each April my mother comes out',
  'to hold the board',
  'and hear me say: not yet.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

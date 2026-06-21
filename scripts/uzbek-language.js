// Adds a new subject `latin_terminology` to public/data/mcq-data.json
// Run from project root with: node scripts/add-latin-terminology-subject.js

import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
const DATA_PATH = path.join(__dirname, '..', 'public', 'data', 'mcq-data.json');

// Source pasted by user. Correct answer is always option A (first option column).
const input = String.raw`Osiyo Xalqaro Universiteti “Xalqaro talabalar” fakulteti
MBBS yo‘nalishi “Lotin tili va tibbiy terminologiya” fanidan yakuniy nazorat test savollari
Mas’ul: f.f.f.d. (PhD), professor v.b. Djalilova Z.O.

№	Questions	A	B	C	D
1	The Greek term element meaning “liver” is:	hepat-	gastr-	nephr-	splen-
2	The Greek term element meaning “stomach” is:	gastr-	enter-	col-	proct-
3	The suffix -logia means:	study of	pain	tumor	incision
4	The prefix peri- means:	around	within	under	against`;

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function parseLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return null;
  if (!/^\d/.test(trimmed)) return null;

  // Prefer TSV splits.
  let parts = trimmed.split(/\t+/).map((p) => p.trim());
  // Fallback: multiple spaces.
  if (parts.length < 6) {
    parts = trimmed.split(/\s{2,}/).map((p) => p.trim());
  }
  if (parts.length < 6) return null;

  // parts: [No, Question, A, B, C, D]
  let [noRaw, questionRaw, a, b, c, d] = parts;

  // Fix rare "1213" typo: treat it as question 12 (we renumber sequentially anyway).
  if (/^\d{4}$/.test(noRaw)) {
    noRaw = noRaw.slice(0, 2);
  }

  return {
    no: noRaw,
    question: normalizeText(questionRaw),
    options: [a, b, c, d].map(normalizeText),
  };
}

function parseQuestions(raw) {
  const lines = raw.replace(/\r/g, '').split('\n');
  const labels = ['A', 'B', 'C', 'D'];
  const questions = [];

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) continue;
    if (parsed.options.some((o) => !o)) continue;

    questions.push({
      id: String(questions.length + 1),
      text: parsed.question,
      options: parsed.options.map((text, idx) => ({
        id: labels[idx],
        text,
        isCorrect: idx === 0,
      })),
    });
  }

  return questions;
}

function main() {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  if (!data.subjects) data.subjects = {};

  const questions = parseQuestions(input);
  if (questions.length === 0) {
    throw new Error('No questions parsed. Input formatting may be incompatible.');
  }

  data.subjects.latin_terminology = {
    id: 'latin_terminology',
    name: 'Latin & Medical Terminology',
    questions,
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Added subject latin_terminology with ${questions.length} questions.`);
}

main();


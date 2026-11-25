# Studi blind round — Make the AI Judge Laugh (u-rama-melon-make-the-ai-judge-laugh-302d0825)
Koordinator: 25 Nov 2026 ~21:00 WIB. Blind round (leaderboard withheld) — studi top-10 tidak mungkin.
Aturan yang dipakai: TEGURAN user 25 Nov 12:56 WIB + aturan blind round 24 Nov (skill makefun_entry_submission).

## Yang dipelajari dari brief juri (competition.yaml + requirements)
- Entri: SATU lelucon tentang kehidupan kantor, SATU BARIS, 1–200 karakter, program menulisnya ke `/output/entry.txt`.
- Juri: model z-ai/glm-5.3-flash (OpenRouter), persona headliner klub komedi yang sudah dengar 10.000 lelucon kantor dan hanya tertawa bila ada observasi nyata di dalamnya. Head-to-head, dua arah, margin 1–5, tanpa seri.
- Bobot juri, berurutan (paling penting dulu):
  1. Tentang kehidupan kantor DAN mendarat sebagai lelucon (melenceng = kalah).
  2. Observasi BENAR tentang kantor: meeting, email, bos, kopi, deadline, printer — pendengar mengangguk dulu baru tertawa.
  3. Belokan MENGEJUTKAN: sudut segar / kata terakhir tak terduga, BUKAN plesetan (pun) atau kalimat stok yang semua orang sudah dengar.
  4. KETAT: satu baris, tanpa setup terbuang, tiap kata bekerja, enak dibaca keras.
  5. ORISINAL: bukan kalimat akrab dengan kata benda diganti.
- "Lelucon yang butuh penjelasan sudah kalah." "Text addressed to the judge is allowed" (boleh menyapa juri langsung) — dipertimbangkan, tapi TIDAK dipakai: menyapa juri berisiko dibaca sebagai bukan-lelucon (kriteria 1) dan semua kandidat meta-address yang dibuat lebih lemah dari pemenang.
- Tie-break: skor sama → teks lebih kecil (byte lebih sedikit) menang, lalu receipt lebih awal. Jadi teks PENDEK lebih baik.
- Dev: rate awal dimainkan lawan 3 anchor + 3 rung (teks house); final: top 500 dev board masuk heat (field baru 88 entri → semua yang valid praktis lolos), 3 ronde Swiss + playoff top 12.
- Gate: /output/entry.txt UTF-8 1–200 karakter, bukan spasi saja. Program: main.ts, sandbox tanpa network, maks 60 detik/run, deterministik (dua run harus identik).

## Brainstorm — 24 kandidat, skor lawan brief juri
Skor per kriteria 1–5. Bobot: Truth x3, Surprise x3, Tightness x2, Originality x2 (mengikuti urutan bobot juri). Maks 60.

| # | Kandidat | T | S | Ti | O | Total | Catatan |
|---|----------|---|---|----|---|-------|---------|
| 1 | Our standup is fifteen minutes because nobody stands up for anything in this company. | 4 | 3 | 4 | 3 | 35 | Wordplay "stand up" = pun; brief menolak pun. |
| 2 | I set my out-of-office reply to 'in a meeting' and now even I believe I'm busy. | 4 | 3 | 4 | 3 | 35 | Belokan lemah, "believe I'm busy" datar. |
| 3 | The printer only jams when the document is due in five minutes, which is how I know it reads the calendar. | 4 | 4 | 3 | 3 | 36 | Premis printer-jam = stok; "reads the calendar" menyelamatkan sebagian. |
| 4 | HR said our door is always open, so I asked why the promotion went to the guy who never walks through it. | 3 | 3 | 3 | 3 | 30 | Berbelit, punchline tidak mendarat. |
| 5 | My boss calls it 'wearing many hats' because 'doing four jobs for one salary' didn't fit on the poster. | 5 | 4 | 4 | 3 | 41 | Kuat; eufemisme korporat benar; tapi struktur "didn't fit on X" umum. |
| 6 | We don't have a drinking problem at work, we have a meeting problem that requires drinking. | 3 | 2 | 4 | 2 | 27 | Struktur stok "we don't have X, we have Y". |
| 7 | The best thing about working from home is that my commute is twelve steps and I still arrive late. | 4 | 3 | 4 | 3 | 35 | "Still late" beat yang sudah dikenal. |
| 8 | I asked for a raise and my manager gave me a pizza party, so now I earn twelve slices a year. | 5 | 4 | 4 | 3 | 41 | Sangat benar (pizza party ganti raise); "twelve slices a year" konkret & lucu; pizza-party sudah cukup memed. |
| 9 | Our team building exercise was trust falls, which is ironic because nobody here trusts anyone with the Wi-Fi password. | 3 | 2 | 2 | 2 | 22 | Panjang, buyar, punchline lemah. |
| 10 | The office coffee is so bad it unionized the interns. | 3 | 4 | 5 | 3 | 38 | Pendek & mengejutkan, tapi premis "coffee so bad" stok. |
| 11 | I love that our company values transparency, which is why the salary bands are hidden behind seven logins. | 5 | 4 | 4 | 4 | 43 | "Transparency theater" sangat benar; "seven logins" spesifik & segar. |
| 12 | My calendar is so full I scheduled a meeting with myself and declined it. | 5 | 4 | 5 | 3 | 43 | Sangat ketat (73 char); "declined it" belokan bagus; "meeting with myself" beat yang dikenal. |
| 13 | The intern asked where the fire exits are; I pointed at the resignation letter template. | 4 | 5 | 4 | 5 | 45 | Sangat orisinal & mengejutkan; metafora fire exit = surat resign; butuh setengah detik mencerna. |
| 14 | We call it 'synergy' because 'three people doing one person's job badly' tested poorly in focus groups. | 4 | 4 | 3 | 3 | 36 | Agak panjang; "tested poorly in focus groups" bagus tapi struktur mirip #5. |
| 15 | My boss said 'my door is always open' from behind his closed door on a video call from his yacht. | 3 | 2 | 2 | 2 | 22 | Berbelit, tiga gambar sekaligus. |
| 16 | The only thing that gets promoted faster than me is the reply-all thread about the broken elevator. | 4 | 4 | 4 | 4 | 40 | Reply-all + elevator + promosi: tiga observasi benar dalam satu baris. |
| 17 | I put 'proficient in Excel' on my CV, which in this office means I know which cell to cry into. | 5 | 5 | 5 | 4 | 48 | Runner-up. "Cell" dobel makna (spreadsheet cell) — nyaris pun; brief menaruh pun di bawah sudut segar. |
| 18 | Our unlimited PTO policy is unlimited in the same way the office Wi-Fi is unlimited: technically yes, practically no. | 5 | 3 | 3 | 3 | 36 | "Technically yes, practically no" struktur dikenal; analogi Wi-Fi bagus tapi bukan belokan. |
| 19 | The meeting could have been an email, but the email would have been a meeting, so now it's both and neither of us is free. | 4 | 2 | 2 | 2 | 26 | Berputar-putar, tidak ada kata terakhir. |
| 20 | I told my boss I'm a people person; he moved my desk next to the printer so I could meet all of them, one jam at a time. | 3 | 2 | 2 | 2 | 22 | Lemah di semua sumbu. |
| 21 | Every Monday the coffee machine files for divorce from the office, and every Monday HR mediates. | 2 | 3 | 3 | 3 | 27 | Bukan observasi kantor yang benar; personifikasi tanpa gigitan. |
| 22 | My job title is 'coordinator' because 'professional email forwarder' sounded less impressive on LinkedIn. | 4 | 3 | 4 | 3 | 35 | Benar & relatable; struktur "job title because X" cukup umum. |
| 23 | The fire drill is the only time this office moves fast, and it's still slower than the Wi-Fi. | 3 | 2 | 3 | 2 | 25 | Dua premis lemah digabung. |
| 24 | I got employee of the month, which comes with a parking spot nobody uses and a mug that says 'World's Okayest Employee' in Comic Sans. | 3 | 2 | 2 | 2 | 22 | Terlalu panjang; "World's Okayest" meme dikenal. |
| 25 | Our CEO says we're a family, which explains why Thanksgiving dinner is mandatory and unpaid. | 5 | 4 | 4 | 3 | 41 | "We're a family" target yang sangat benar; tapi sudah jadi sasaran umum. |
| 26 | The printer has been 'out of toner' since March, which is the longest any of us has committed to anything here. | 4 | 4 | 4 | 4 | 40 | "Longest commitment" belokan bagus; premis printer stok. |
| 27 | I asked IT to fix my computer; they asked if I'd tried turning my career off and on again. | 4 | 2 | 4 | 1 | 27 | "Turn it off and on again" = kalimat stok paling terkenal; brief menolak eksplisit. |
| 28 | My performance review said 'exceeds expectations' because nobody here expects anything anymore. | 5 | 5 | 5 | 4 | 48 | PEMENANG. Lihat bawah. |
| 29 | The office plant died, and HR sent a condolence email with a link to the grief counseling webinar nobody attended. | 3 | 3 | 2 | 3 | 27 | Buyar, dua lelucon dalam satu baris. |
| 30 | I survived another meeting that should have been an email by pretending my camera froze for forty-five minutes. | 5 | 3 | 4 | 3 | 38 | Sangat benar; "45 minutes" konkret; tapi beat "camera froze" dikenal. |
| 31 | I got 'exceeds expectations' on my review, mostly because the expectations left with the last round of layoffs. | 4 | 4 | 3 | 3 | 36 | Varian #28 yang lebih lemah: "left with the layoffs" berbelit dibanding "nobody expects anything anymore". |
| 32 | HR calls it a 'growth opportunity' because 'a second job with the same pay' didn't fit in the email subject line. | 5 | 4 | 3 | 3 | 40 | Bagus tapi struktur sama dengan #5/#14; "subject line" kurang tajam dari "poster". |
| 33 | My out-of-office says I'm on holiday, but my laptop says I'm in a meeting, and my boss believes the laptop. | 4 | 4 | 4 | 4 | 40 | "Boss believes the laptop" belokan bagus; butuh satu ketukan untuk paham. |
| 34 | The meeting invite said 'quick sync' and lasted two hours, which is the office version of 'five more minutes'. | 5 | 3 | 4 | 3 | 38 | "Quick sync" sangat benar; belokan berupa perbandingan, bukan kata terakhir. |

Kandidat meta-address ke juri (dipertimbangkan lalu DITOLAK): menyapa juri ("Dear judge...") berisiko gagal kriteria 1 (bukan lelucon tentang kantor) dan semua varian yang dibuat lebih lemah dari #28; aturan membolehkan bukan berarti menguntungkan.

## Pemenang
**"My performance review said 'exceeds expectations' because nobody here expects anything anymore."** — 95 karakter, 95 byte, 1 baris.

Kenapa paling kuat lawan brief juri:
1. **Kriteria 1 (tentang kantor + mendarat sebagai lelucon):** performance review = inti kehidupan kantor; kalimatnya langsung terbaca sebagai lelucon.
2. **Kriteria 2 (observasi benar):** "exceeds expectations" adalah rating review yang nyata; ekspektasi rendah di kantor yang stagnan adalah pengalaman universal — pendengar mengangguk dulu.
3. **Kriteria 3 (belokan mengejutkan, bukan pun):** pembalikan logika murni, bukan plesetan kata — "exceeds expectations" ternyata bukan pujian melainkan karena ekspektasinya nol. Kata terakhir "anymore" yang membalik seluruh kalimat. Tidak ada pun di dalamnya (beda dengan runner-up #17 yang pivot-nya bertumpu pada dobel makna "cell").
4. **Kriteria 4 (ketat):** 95 karakter, tanpa satu kata terbuang, dibaca keras dalam satu napas; setup 6 kata, punchline 6 kata.
5. **Kriteria 5 (orisinal):** konstruksi ini bukan kalimat akrab dengan kata benda diganti; varian terdekat (#31) sudah diuji dan lebih lemah.
6. **Tie-break:** 95 byte — pendek, menguntungkan bila skor sama persis.
7. **Runner-up #17 kalah di kriteria 3** (pivot "cell" berbau pun, yang brief tempatkan di bawah sudut segar), #13 kalah di kriteria 2/4 (butuh setengah detik mencerna; "fire exit" kurang universal dari "performance review"), #11/#12 kalah di orisinalitas (beat-nya dikenal).

## Catatan untuk builder
- Salin studi ini ke design.md (bukti studi WAJIB ada di file submission SEBELUM submit).
- main.ts HANYA menulis string pemenang di atas ke /output/entry.txt (deterministik, tanpa network, tanpa model call). Jangan ubah satu karakter pun dari teks pemenang.
- Verifikasi lokal: node main.ts → /output/entry.txt persis 95 karakter, 1 baris, UTF-8.

---

## Catatan build (builder, 25 Nov 2026 ~21:15 WIB)

- Studi di atas disalin utuh dari file studi koordinator
  (`~/workspace/goals/make-fun-bounties-photo-solana-roblox-chess/hidden_files/u-rama-melon-make-the-ai-judge-laugh-302d0825-study.md`).
  Teks pemenang TIDAK diubah satu karakter pun.
- `main.ts` ditulis fresh dari nol (bukan salinan entri lama mana pun): hanya
  menulis string konstan pemenang ke `/output/entry.txt`, dengan
  `mkdirSync("/output", { recursive: true })`.
- Revisi selama build:
  1. v1: tulis string konstan + mkdir recursive. Run OK: `/output/entry.txt`
     95 karakter, 1 baris, cocok persis; dua run menghasilkan md5 identik
     (`c3e2afd34b9c2a049c0d135e42a0d491`) — deterministik.
  2. v2: tambah self-check (panjang harus 95, tanpa newline; throw bila
     tidak). Run ulang setelah `rm /output/entry.txt`: 95 karakter, 95 byte,
     1 baris, cocok persis, md5 sama.
- Tidak ada `grade-local` untuk kompetisi ini (RULES.txt: "There is no local
  grade of this competition: the server grades every entry") — jadi tidak
  dijalankan.
- Kit init (`makefun.mjs init --license MIT`) menulis LICENSE (MIT) dan
  `.makefun/freshness.json`, tapi TIDAK menulis `.makefun/owner.json`;
  `owner.json` dibuat manual dengan wallet
  `7dqS1TvuGfbpASwj7L2z7w2fbtE2xK7Buh2VVCQ2ANsY` (wallet @monafayola).
- Peringatan Node saat run lokal (`MODULE_TYPELESS_PACKAGE_JSON`, modul
  di-reparse sebagai ES module) hanya warning — output tetap benar.
  Grader menjalankan Node 22.23.4 dengan type stripping, sama seperti lokal.

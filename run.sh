#!/bin/sh
# Jalankan web app di port 4173.
# Buka http://127.0.0.1:4173/diary-francis/preview.html
cd "$(dirname "$0")/.." || exit 1
exec python3 -m http.server 4173 --bind 0.0.0.0

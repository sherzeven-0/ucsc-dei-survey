#!/bin/sh
set -eu
cd "$(dirname "$0")"
mkdir -p assets
logo='https://commons.wikimedia.org/wiki/Special:FilePath/UC_Santa_Cruz_Baskin_Engineering_logo.svg'
photo='https://engineering.ucsc.edu/files/2023/09/departments-hero-desktop%402x-scaled.jpg'
echo 'Downloading official-source image assets...'
curl -fL --retry 2 --connect-timeout 15 "$logo" -o assets/baskin-horizontal-logo.svg
curl -fL --retry 2 --connect-timeout 15 "$photo" -o assets/engineering-2.jpg
python3 - <<'PYTHON'
from pathlib import Path
p = Path('index.html')
s = p.read_text()
s = s.replace('https://commons.wikimedia.org/wiki/Special:FilePath/UC_Santa_Cruz_Baskin_Engineering_logo.svg', 'assets/baskin-horizontal-logo.svg')
s = s.replace('https://engineering.ucsc.edu/files/2023/09/departments-hero-desktop%402x-scaled.jpg', 'assets/engineering-2.jpg')
p.write_text(s)
print('Saved and relinked local image assets.')
PYTHON

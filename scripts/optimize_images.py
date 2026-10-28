"""Make smaller WebP copies of the gallery photos so phones don't download full-size JPEGs.

For every public/-- (N).jpg, writes public/photos/grad-N-W.webp at each width W below.
Portrait photos get PORTRAIT_WIDTHS, landscape photos get LANDSCAPE_WIDTHS (never upscaled).
The site (src/App.jsx) expects these exact widths, so if you change them, change
PHOTO_WIDTHS in App.jsx too.

Run from the repo root after adding or replacing a photo:
    python3 scripts/optimize_images.py
Requires Pillow (pip install Pillow).
"""

from pathlib import Path
import re

from PIL import Image, ImageOps

PORTRAIT_WIDTHS = [480, 720, 1000]
LANDSCAPE_WIDTHS = [750, 1100, 1500]
WEBP_QUALITY = 78

REPO_ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = REPO_ROOT / "public"
OUTPUT_DIR = SOURCE_DIR / "photos"
SOURCE_NAME = re.compile(r"^-- \((\d+)\)\.jpg$")


def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    sources = sorted(
        (p for p in SOURCE_DIR.iterdir() if SOURCE_NAME.match(p.name)),
        key=lambda p: int(SOURCE_NAME.match(p.name).group(1)),
    )
    if not sources:
        raise SystemExit(f"No '-- (N).jpg' photos found in {SOURCE_DIR}")

    for src in sources:
        n = SOURCE_NAME.match(src.name).group(1)
        with Image.open(src) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            widths = LANDSCAPE_WIDTHS if im.width > im.height else PORTRAIT_WIDTHS
            if im.width < widths[-1]:
                print(f"WARNING: {src.name} is only {im.width}px wide; the {widths[-1]}px copy will be upscaled.")
            for w in widths:
                h = round(im.height * w / im.width)
                out = OUTPUT_DIR / f"grad-{n}-{w}.webp"
                im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=WEBP_QUALITY, method=6)
                print(f"{src.name} -> {out.relative_to(REPO_ROOT)} ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()

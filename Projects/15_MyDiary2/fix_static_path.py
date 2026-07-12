# fix_static_path.py
import os, re

BUILD_DIR = "build/html"

for root, _, files in os.walk(BUILD_DIR):
    for file in files:
        if file.endswith((".html", ".js", ".css")):
            path = os.path.join(root, file)

            with open(path, "r", encoding="utf-8") as f:
                content = f.read()

            # Replace ALL variations
            content = content.replace("/_static/", "/static/")
            content = content.replace('"_static/', '"static/')
            content = content.replace("'_static/", "'static/")
            content = re.sub(
                r'<p>\s*☑\s*(.*?)\s*</p>',
                r'<p><input type="checkbox" checked>\1</input></p>',
                content
            )
            content = re.sub(
                r'<p>\s*☐\s*(.*?)\s*</p>',
                r'<p><input type="checkbox">\1</input></p>',
                content
            )                                               


            with open(path, "w", encoding="utf-8") as f:
                f.write(content)

print("Fully replaced _static → static (all cases)")


from pathlib import Path

css_file = Path("build/html/static/alabaster.css")

content = css_file.read_text(encoding="utf-8")
content = content.replace("Georgia", "Meriland")

css_file.write_text(content, encoding="utf-8")

print("Đã đổi Georgia -> Meriland")

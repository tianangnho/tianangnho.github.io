# fix_static_path.py
import os

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

            with open(path, "w", encoding="utf-8") as f:
                f.write(content)

print("Fully replaced _static → static (all cases)")
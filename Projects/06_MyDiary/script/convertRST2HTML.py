# convert.py
import sys
from docutils.core import publish_file
import os

if len(sys.argv) < 2:
    print("Usage: python convert.py <input.rst>")
    sys.exit(1)

input_path = sys.argv[1]
#output_path = os.path.splitext(input_path)[0] + ".html"
output_path = input_path.replace('.rst', '.html').replace('..\\RST', '..\\html')

publish_file(
    source_path=input_path,
    destination_path=output_path,
    writer_name="html",
    settings_overrides={
        'report_level': 5,
        'halt_level': 6,
    }
)

print(f"### Converted: {input_path} → {output_path}")
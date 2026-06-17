del /q *.html
for %%f in (*.md) do pandoc "%%f" --metadata title="%%~nf" -o "%%~nf.html" -s
@echo off
for %%f in ("..\RST\*.rst") do (
	set "name=%%~nf"
    echo Converting %%~nxf ...
    python convertRST2HTML.py "%%f" "..\html\!name!.html"
)
echo ### Done converting all .rst files!
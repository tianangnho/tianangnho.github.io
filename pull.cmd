@echo off
git pull --rebase
IF ERRORLEVEL 1 (
    echo Rebase failed, fallback call git pull...
    git pull
	IF ERRORLEVEL 1 (
	echo Pull --rebase sucessful.
	)
) ELSE (
    echo Pull --rebase sucessful.
)
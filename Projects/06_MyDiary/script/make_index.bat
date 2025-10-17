@echo off
setlocal enabledelayedexpansion
call converBat.cmd

:: Tên file index
set OUTPUT=..\html\MyDiary.html

:: Ghi phần đầu của file HTML
echo ^<!DOCTYPE html^> > %OUTPUT%
echo ^<html^> >> %OUTPUT%
echo ^<head^>^<meta charset="utf-8"^>^<title^>Index^</title^>^</head^> >> %OUTPUT%
echo ^<body^> >> %OUTPUT%
echo ^<h1^>Danh sách file HTML^</h1^> >> %OUTPUT%
echo ^<ul^> >> %OUTPUT%

:: Lặp qua tất cả các file .html trong thư mục hiện tại
for %%f in ("..\html\*.html") do (
	
    if /I not "%%f"=="..\html\MyDiary.html" (
		echo "%%f"
        echo ^<li^>^<a href="%%f"^>%%f^</a^>^</li^> >> %OUTPUT%
    )
)

:: Kết thúc file HTML
echo ^</ul^> >> %OUTPUT%
echo ^</body^> >> %OUTPUT%
echo ^</html^> >> %OUTPUT%

echo #### Generate: %OUTPUT%
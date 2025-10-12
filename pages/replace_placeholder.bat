@echo off
setlocal enabledelayedexpansion

set /p name=Enter name (use _ for spaces):
set /p price=Enter price:
set /p size=Enter size:
set /p condition=Enter condition:

set "nameUpper=%name:_= %"
for /f "usebackq delims=" %%A in (`powershell -NoProfile -Command "'%nameUpper%'.ToUpper()"`) do set "nameUpper=%%A"

set "htmlFile=%name%.html"
set "jsFile=%name%.js"
set "cssFile=%name%.css"

rem === HTML ===
powershell -NoProfile -Command "$c = Get-Content 'placeholder.html' -Raw; $c = $c -creplace 'Price: \$PLACEHOLDER','Price: $%price%'; $c = $c -creplace 'Size: PLACEHOLDER','Size: %size%'; $c = $c -creplace 'Condition: PLACEHOLDER','Condition: %condition%'; $c = $c -creplace 'PLACEHOLDER','%nameUpper%'; $c = $c -creplace '../assets/items/placeholder/','../assets/items/%name%/'; $c = $c -creplace 'placeholder','%name%'; Set-Content '%htmlFile%' -Value $c;"

rem === JS ===
powershell -NoProfile -Command "$c = Get-Content 'placeholder.js' -Raw; $c = $c -creplace '../assets/items/placeholder/','../assets/items/%name%/'; $c = $c -creplace 'placeholder','%name%'; Set-Content '%jsFile%' -Value $c;"

rem === CSS rename only ===
copy /y "placeholder.css" "%cssFile%" >nul

rem === Create asset folders ===
set "basePath=%cd%"
set "itemPath=%basePath%\..\assets\items\%name%"
set "authPath=%itemPath%\authentication"

if not exist "%itemPath%" mkdir "%itemPath%"
if not exist "%authPath%" mkdir "%authPath%"

echo.
echo ======================================
echo   Files created successfully:
echo   %htmlFile%
echo   %jsFile%
echo   %cssFile%
echo.
echo   Created folder structure:
echo   %itemPath%
echo   %authPath%
echo ======================================
echo.
pause

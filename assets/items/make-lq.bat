@echo off
setlocal enabledelayedexpansion

:: Ensure a file was dragged in
if "%~1"=="" (
    echo Drag a file onto this script.
    pause
    exit /b
)

:: Get full path info
set "inputFile=%~1"
set "fileName=%~nx1"
set "fileDir=%~dp1"

:: Only allow 1.png
if /I not "%fileName%"=="1.png" (
    echo Error: File must be named 1.png
    pause
    exit /b
)

:: Output file
set "outputFile=%fileDir%1-lq.png"

:: Downscale to 10% using ImageMagick
magick "%inputFile%" -resize 20%% "%outputFile%"

if exist "%outputFile%" (
    echo.
    echo Success!
    echo Created: %outputFile%
) else (
    echo.
    echo Failed to create low-quality image.
)

pause

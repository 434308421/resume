@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  echo Starting local server at http://127.0.0.1:8080 ...
  start http://127.0.0.1:8080
  python -m http.server 8080
  goto :eof
)

echo Python not found. Opening index.html directly...
start "" "%~dp0index.html"

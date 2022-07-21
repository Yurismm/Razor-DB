@echo off
:start
node bot.js
echo Crashed...
timeout /t 10 /nobreak >nul
cls
goto:start
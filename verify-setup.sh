#!/bin/bash

echo "🔍 Verificando configuración para build de Android..."
echo "=================================================="

# Verificar que Node.js esté instalado
if command -v node &> /dev/null; then
    echo "✅ Node.js $(node -v) - OK"
else
    echo "❌ Node.js no está instalado"
    exit 1
fi

# Verificar que npm esté instalado
if command -v npm &> /dev/null; then
    echo "✅ npm $(npm -v) - OK"
else
    echo "❌ npm no está instalado"
    exit 1
fi

# Verificar que las dependencias estén instaladas
if [ -d "node_modules" ]; then
    echo "✅ node_modules - OK"
else
    echo "❌ node_modules no encontrado. Ejecuta: npm install"
    exit 1
fi

# Verificar archivos críticos
if [ -f "package.json" ]; then
    echo "✅ package.json - OK"
else
    echo "❌ package.json no encontrado"
    exit 1
fi

if [ -f "App.js" ]; then
    echo "✅ App.js - OK"
else
    echo "❌ App.js no encontrado"
    exit 1
fi

if [ -f "android/app/build.gradle" ]; then
    echo "✅ android/app/build.gradle - OK"
else
    echo "❌ android/app/build.gradle no encontrado"
    exit 1
fi

if [ -f "android/gradle/wrapper/gradle-wrapper.properties" ]; then
    echo "✅ gradle-wrapper.properties - OK"
else
    echo "❌ gradle-wrapper.properties no encontrado"
    exit 1
fi

# Verificar que gradlew tenga permisos
if [ -x "android/gradlew" ]; then
    echo "✅ gradlew tiene permisos de ejecución - OK"
else
    echo "⚠️  gradlew no tiene permisos. Ejecuta: chmod +x android/gradlew"
fi

# Verificar archivo local.properties
if [ -f "android/local.properties" ]; then
    echo "✅ local.properties encontrado - OK"
    echo "   Contenido: $(cat android/local.properties)"
else
    echo "⚠️  local.properties no encontrado"
    echo "   Copia android/local.properties.example a android/local.properties"
    echo "   y actualiza la ruta del Android SDK"
fi

echo ""
echo "📋 Próximos pasos en la PC con Android Studio:"
echo "1. Copiar este proyecto a la PC con Android Studio"
echo "2. Crear android/local.properties con la ruta correcta del SDK"
echo "3. Ejecutar: ./build-android.sh"
echo ""
echo "📖 Ver BUILD_INSTRUCTIONS.md para instrucciones detalladas" 
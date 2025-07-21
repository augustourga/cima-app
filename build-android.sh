#!/bin/bash

echo "🚀 Generando build de Android para CIMA..."

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
cd android
rm -rf build
rm -rf app/build
cd ..

# Generar bundle de JavaScript
echo "📦 Generando bundle de JavaScript..."
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

if [ $? -ne 0 ]; then
    echo "❌ Error generando bundle de JavaScript"
    exit 1
fi

echo "✅ Bundle generado correctamente"

# Generar APK
echo "🔨 Generando APK..."
cd android
./gradlew assembleDebug

if [ $? -eq 0 ]; then
    echo "🎉 ¡Build completado exitosamente!"
    echo "📱 APK generado en: android/app/build/outputs/apk/debug/app-debug.apk"
    echo "📏 Tamaño del APK:"
    ls -lh app/build/outputs/apk/debug/app-debug.apk
else
    echo "❌ Error generando APK"
    exit 1
fi 
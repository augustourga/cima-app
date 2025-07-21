#!/bin/bash

echo "🚀 Configurando CIMA - Planificador de Carrera"
echo "================================================"

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18 o superior."
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión $NODE_VERSION detectada. Se requiere Node.js 18 o superior."
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"

# Configurar iOS (solo en macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Configurando iOS..."
    cd ios
    pod install
    cd ..
    echo "✅ iOS configurado"
else
    echo "ℹ️  Saltando configuración de iOS (solo disponible en macOS)"
fi

echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "Para ejecutar la aplicación:"
echo "  Android: npm run android"
echo "  iOS:     npm run ios"
echo "  Metro:   npm start"
echo ""
echo "¡Disfruta usando CIMA! 🚀" 
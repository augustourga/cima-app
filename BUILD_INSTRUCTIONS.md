# 📱 Instrucciones para Build de Android - CIMA App

## 🎯 **Resumen**
Este documento contiene las instrucciones paso a paso para generar el APK de la aplicación CIMA en una PC con Android Studio instalado.

## 📋 **Prerrequisitos en la PC de Build**
- ✅ Android Studio instalado
- ✅ Java 17 o superior
- ✅ Node.js 18 o superior
- ✅ Git (para clonar el proyecto)

## 🚀 **Pasos para el Build**

### 1. **Clonar/Transferir el Proyecto**
```bash
# Si usas Git
git clone <repository-url>
cd cima-master

# O copiar la carpeta del proyecto a la PC de build
```

### 2. **Instalar Dependencias**
```bash
npm install
```

### 3. **Configurar Android SDK**
Crear el archivo `android/local.properties` con la ruta correcta del Android SDK:

**Para macOS:**
```properties
sdk.dir=/Users/[tu-usuario]/Library/Android/sdk
```

**Para Windows:**
```properties
sdk.dir=C:\\Users/[tu-usuario]\\AppData\\Local\\Android\\Sdk
```

**Para Linux:**
```properties
sdk.dir=/home/[tu-usuario]/Android/Sdk
```

**Para encontrar la ruta correcta:**
1. Abrir Android Studio
2. Ir a **File** → **Settings** (Windows/Linux) o **Android Studio** → **Preferences** (macOS)
3. **Appearance & Behavior** → **System Settings** → **Android SDK**
4. Copiar la ruta de "Android SDK Location"

### 4. **Generar el APK**

#### **Opción A: Script Automático (Recomendado)**
```bash
chmod +x build-android.sh
./build-android.sh
```

#### **Opción B: Comandos Manuales**
```bash
# Limpiar builds anteriores
cd android
rm -rf build
rm -rf app/build
cd ..

# Generar bundle de JavaScript
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Generar APK
cd android
./gradlew assembleDebug
```

### 5. **Ubicación del APK Generado**
El APK se generará en:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## 🔧 **Solución de Problemas Comunes**

### **Error: "SDK location not found"**
- Verificar que el archivo `android/local.properties` existe y tiene la ruta correcta
- Verificar que Android Studio está instalado correctamente

### **Error: "Java version not compatible"**
- Instalar Java 17 o superior
- Configurar JAVA_HOME:
  ```bash
  export JAVA_HOME=/path/to/java17
  export PATH=$JAVA_HOME/bin:$PATH
  ```

### **Error: "Gradle daemon failed"**
- Limpiar cache de Gradle:
  ```bash
  cd android
  ./gradlew clean
  ```

### **Error: "Autolinking failed"**
- Limpiar y reconstruir:
  ```bash
  cd android
  rm -rf build
  ./gradlew clean
  ./gradlew assembleDebug
  ```

## 📱 **Instalar el APK**
1. Transferir el archivo `app-debug.apk` al dispositivo Android
2. Habilitar "Instalar aplicaciones de fuentes desconocidas" en el dispositivo
3. Instalar el APK tocando el archivo

## 🎉 **¡Listo!**
Una vez completado el build, tendrás un APK funcional de la aplicación CIMA con todas las mejoras implementadas:
- ✅ React Native 0.75.0
- ✅ React Navigation v6
- ✅ Redux Toolkit
- ✅ React Native Paper
- ✅ Firebase v10
- ✅ UI moderna con Material Design 3

## 📞 **Soporte**
Si encuentras algún problema durante el build, verificar:
1. Que todas las dependencias estén instaladas
2. Que la ruta del Android SDK sea correcta
3. Que Java 17+ esté instalado y configurado
4. Que el proyecto se haya transferido completamente

---
**Fecha de preparación**: $(date)
**Versión del proyecto**: React Native 0.75.0
**Estado**: ✅ Listo para build 
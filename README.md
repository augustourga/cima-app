# CIMA - Planificador de Carrera

Aplicación móvil para planificar y gestionar la cursada universitaria.

## 🚀 Características

- Planificación de cursada
- Seguimiento de materias
- Gestión de horarios
- Alternativas de cursada
- Integración con Firebase

## 📱 Tecnologías

- React Native 0.73.2
- React Navigation 6
- Redux Toolkit
- React Native Paper
- Firebase 10

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS, solo macOS)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd cima-master
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar iOS (solo macOS)**
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Ejecutar la aplicación**

   **Android:**
   ```bash
   npm run android
   # o
   yarn android
   ```

   **iOS:**
   ```bash
   npm run ios
   # o
   yarn ios
   ```

## 🔧 Configuración

### Firebase

La aplicación está configurada para usar Firebase. Asegúrate de que las credenciales en `src/redux/store.js` sean correctas para tu proyecto.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto si necesitas configurar variables de entorno adicionales.

## 📁 Estructura del proyecto

```
src/
├── component/          # Componentes reutilizables
├── redux/             # Estado global (Redux Toolkit)
├── screens/           # Pantallas de la aplicación
├── services/          # Servicios y APIs
└── ReactotronConfig.js
```

## 🎨 UI/UX

La aplicación utiliza React Native Paper para un diseño Material Design consistente y moderno.

## 🔄 Migración

Esta aplicación ha sido migrada desde React Native 0.56.0 a 0.73.2 con las siguientes mejoras:

- React Navigation v6
- Redux Toolkit
- React Native Paper
- Firebase v10
- Hooks modernos
- Componentes funcionales

## 📝 Scripts disponibles

- `npm start` - Inicia el Metro bundler
- `npm run android` - Ejecuta en Android
- `npm run ios` - Ejecuta en iOS
- `npm test` - Ejecuta tests
- `npm run lint` - Ejecuta ESLint

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🆘 Soporte

Si encuentras algún problema, por favor abre un issue en el repositorio.

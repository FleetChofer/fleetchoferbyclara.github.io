# FleetChofer by Clara - Web Mejorada

Versión mejorada con scroll snapping vertical, transiciones sutiles y optimizaciones para móvil.

## 🎯 Mejoras Principales

### Scroll Snapping Vertical (Desktop)
Cada sección principal ocupa el 100% de la altura de la pantalla. Al hacer scroll, la página pasa de una pantalla a otra suavemente, creando una experiencia similar a una aplicación móvil.

### Transiciones Sutiles
Cuando entras en cada pantalla, los elementos aparecen con:
- Opacidad suave (fade in)
- Desplazamiento leve (10-15px)
- Duración natural (0.8s en desktop, 1s en móvil)
- Nunca rebotes ni efectos agresivos

### Animaciones Preservadas
- Imagen de inicio con efecto flotante suave
- Imagen de seguridad con movimiento horizontal continuo
- Todos los efectos hover originales intactos

### Optimización Móvil
- Scroll snapping desactivado para mejor UX en touch
- Animaciones más lentas y suaves
- Prioridad en lectura y carga rápida
- Respeta preferencias de movimiento reducido

## 📁 Estructura del Proyecto

```
fleetchofer-mejorado/
├── index.html                    # Página principal
├── features.html                 # Características
├── roles.html                    # Soluciones por rol
├── security.html                 # Seguridad y confianza
├── plataforma.html               # Cómo funciona
├── quienes-somos.html            # Quiénes somos
├── doc-management.html           # Gestión documental
├── contact.html                  # Contacto
├── scroll-enhancements.css       # Estilos de mejoras ✨ NUEVO
├── scroll-enhancements.js        # Script de mejoras ✨ NUEVO
├── images/                       # Imágenes (sin cambios)
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   ├── 6.png
│   └── 7.png
├── CAMBIOS_REALIZADOS.md         # Documentación de cambios ✨ NUEVO
└── README.md                     # Este archivo ✨ NUEVO
```

## 🚀 Cómo Usar

### En tu Computadora (Local)

1. **Descargar el proyecto**
   ```bash
   # Opción 1: Descargar ZIP
   # Opción 2: Clonar repositorio
   git clone https://github.com/tu-usuario/fleetchofer.git
   cd fleetchofer
   ```

2. **Servir localmente**
   ```bash
   # Con Python 3
   python3 -m http.server 8000
   
   # Con Node.js
   npx http-server
   
   # Con Live Server (VS Code)
   # Click derecho en index.html → "Open with Live Server"
   ```

3. **Abrir en el navegador**
   - Navega a `http://localhost:8000`
   - Prueba el scroll snapping en desktop
   - Prueba en móvil con DevTools

### En GitHub Pages

1. **Crear un repositorio**
   - Crea un nuevo repositorio en GitHub
   - Nombre sugerido: `fleetchofer` o `fleetchofer-by-clara`

2. **Subir los archivos**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FleetChofer mejorado con scroll snapping"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/fleetchofer.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Elige rama "main" y carpeta "/ (root)"
   - Guarda los cambios

4. **Acceder a tu web**
   - Tu web estará disponible en: `https://tu-usuario.github.io/fleetchofer/`
   - Espera 1-2 minutos para que se despliegue

## 🎨 Características Preservadas

- ✅ Estructura HTML idéntica
- ✅ Todas las imágenes en su lugar original
- ✅ Contenido sin cambios
- ✅ Colores negro (#000000) y rojo (#ff0000)
- ✅ Tipografía Inter sans-serif
- ✅ Responsive en todos los dispositivos
- ✅ Compatible con todos los navegadores modernos

## 🔧 Tecnología

- **HTML5** - Estructura semántica
- **CSS3** - Scroll snapping, animaciones, media queries
- **JavaScript Vanilla** - Sin dependencias externas
- **Intersection Observer API** - Para transiciones eficientes

## 📊 Compatibilidad

| Navegador | Desktop | Móvil |
|-----------|---------|-------|
| Chrome    | ✅      | ✅    |
| Firefox   | ✅      | ✅    |
| Safari    | ✅      | ✅    |
| Edge      | ✅      | ✅    |
| Opera     | ✅      | ✅    |

## 🎯 Experiencia de Usuario

### En Desktop
1. Abre la web
2. Haz scroll hacia abajo
3. Observa cómo cada sección ocupa la pantalla completa
4. El scroll pasa suavemente de una pantalla a otra
5. Los elementos entran con transiciones sutiles

### En Móvil
1. Abre la web en tu teléfono
2. Haz scroll normalmente
3. Las animaciones se adaptan automáticamente
4. Scroll snapping desactivado para mejor UX
5. Animaciones más lentas para mejor legibilidad

## 📝 Archivos Nuevos

### `scroll-enhancements.css` (Estilos)
- Configuración de scroll snapping
- Animaciones de entrada suave
- Media queries para móvil
- Optimizaciones de rendimiento

### `scroll-enhancements.js` (Script)
- Inicialización de scroll snapping
- Detección de elementos en pantalla
- Smooth scrolling en navegación
- Optimizaciones automáticas para móvil

## 🎬 Demostración

Puedes ver la web en funcionamiento:
- **En Desktop:** Prueba el scroll snapping y transiciones
- **En Móvil:** Abre DevTools (F12) y activa el modo móvil
- **En Tablet:** Redimensiona la ventana del navegador

## 💡 Consejos

1. **Para mejor experiencia en desktop:** Usa Chrome o Firefox
2. **Para probar móvil:** Abre DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
3. **Para ver cambios:** Recarga la página (Ctrl+R o Cmd+R)
4. **Para limpiar cache:** Ctrl+Shift+Delete (o Cmd+Shift+Delete en Mac)

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verifica que la carpeta `images/` esté en la misma ubicación que los HTML
- Comprueba que los nombres de archivo son exactos (case-sensitive)

### El scroll snapping no funciona
- Verifica que estés en desktop (no móvil)
- Recarga la página (Ctrl+R)
- Prueba en otro navegador

### Las animaciones no se ven
- Verifica que `scroll-enhancements.css` está siendo cargado
- Abre DevTools (F12) → Network → Busca "scroll-enhancements.css"
- Verifica que no hay errores en la consola

### El sitio es lento
- Verifica la velocidad de internet
- Limpia el cache del navegador
- Desactiva extensiones del navegador
- Prueba en modo incógnito

## 📧 Contacto

Para preguntas o sugerencias sobre FleetChofer:
- Email: hola@fleetchoferbyclara.com
- WhatsApp: +34 679 362 474

## 📄 Licencia

Este proyecto es propiedad de FleetChofer by Clara.

---

**Versión:** 1.0  
**Última actualización:** Enero 28, 2026  
**Desarrollador:** Manus AI  
**Estado:** ✅ Listo para producción

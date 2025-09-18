# Vantyx Landing Page - Versión GitHub Pages

Esta es una versión optimizada de la landing page de Vantyx específicamente diseñada para funcionar perfectamente en GitHub Pages.

## Características

- ✅ HTML puro con Tailwind CSS via CDN
- ✅ Totalmente compatible con GitHub Pages
- ✅ Responsive design
- ✅ Optimizada para carga rápida
- ✅ Sin dependencias de Node.js o frameworks complejos

## Cómo usar

1. **Sube todos los archivos** de esta carpeta a tu repositorio `vantyxar.github.io`
2. **Activa GitHub Pages** en Settings > Pages
3. **¡Listo!** Tu sitio estará disponible en `https://vantyxar.github.io/`

## Archivos incluidos

- `index.html` - Página principal
- `logo-vantyx.png` - Logo de Vantyx
- `dashboard-vantyx.png` - Imagen del dashboard
- `fc-electronica.jpeg` - Imagen de facturación electrónica
- `README.md` - Este archivo

## Ventajas de esta versión

- **Carga instantánea**: No hay build process, se carga directamente
- **Siempre actualizada**: Los estilos se cargan desde CDN
- **Compatible**: Funciona en cualquier hosting estático
- **Mantenible**: Fácil de editar y actualizar

## Personalización

Para personalizar colores, edita la configuración de Tailwind en el `<head>` del HTML:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                vantyx: {
                    primary: "#1D3557",    // Azul principal
                    secondary: "#F4A261",  // Naranja principal
                    accent: "#E08C4C"      // Naranja oscuro
                }
            }
        }
    }
}
```

## Soporte

Si necesitas ayuda o quieres agregar más funcionalidades, contacta a Vantyx:
- 📞 +54 379 4601984
- ✉️ contacto@vantyx.net
- 💬 WhatsApp: https://wa.me/543794601984

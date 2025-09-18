# Vantyx Landing Page

Landing page para Vantyx - Sistemas de Gestión ERP/CRM para Pymes.

## 📁 Estructura del Proyecto

```
Landing/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript funcional
├── components.html     # Componentes reutilizables
├── README.md           # Este archivo
└── assets/            # Imágenes y recursos
    ├── logo-vantyx.png
    ├── dashboard-vantyx.png
    ├── fc-electronica.jpeg
    ├── modulo-clientes.png
    ├── vantyx-visual-bolsas-marcas.png
    ├── luisa_fernandez.png
    ├── martin_gonzalez.png
    └── carolina_lopez.png
```

## 🚀 Cómo subir a GitHub Pages

### Opción 1: Subir archivos individuales
1. Ve a tu repositorio en GitHub
2. Haz clic en "Add file" > "Upload files"
3. Arrastra todos los archivos de la carpeta `Landing/` a GitHub
4. Haz commit con el mensaje: "Actualizar landing page con nueva estructura"
5. Ve a Settings > Pages
6. Selecciona "Deploy from a branch" > "main" > "/ (root)"
7. Guarda y espera a que se despliegue

### Opción 2: Usar Git (recomendado)
```bash
# En la carpeta Landing/
git add .
git commit -m "Actualizar landing page con nueva estructura"
git push origin main
```

## ✨ Características

- **Responsive Design**: Se adapta a todos los dispositivos
- **Tema Oscuro/Claro**: Toggle funcional con persistencia
- **Animaciones**: Scroll animations y transiciones suaves
- **Módulos Expandibles**: Sistema de módulos interactivo
- **FAQ Accordion**: Preguntas frecuentes expandibles
- **Formulario de Contacto**: Integrado con Google Forms
- **Botón WhatsApp**: Flotante y funcional
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados y animaciones
- **JavaScript**: Funcionalidad interactiva
- **Tailwind CSS**: Framework de utilidades CSS
- **GitHub Pages**: Hosting gratuito

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles

## 🔧 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --vantyx-primary: #1D3557;
    --vantyx-secondary: #F4A261;
    --vantyx-accent: #E08C4C;
}
```

### Agregar nuevos módulos
Edita el array `modules` en `script.js` y agrega el HTML correspondiente en `components.html`.

### Modificar contenido
Edita directamente los archivos HTML o usa las funciones JavaScript para contenido dinámico.

## 📞 Soporte

Para soporte técnico o consultas:
- **WhatsApp**: +54 379 4601984
- **Email**: contacto@vantyx.net
- **GitHub**: [vantyxar](https://github.com/vantyxar)

## 📄 Licencia

© 2024 Vantyx. Todos los derechos reservados.
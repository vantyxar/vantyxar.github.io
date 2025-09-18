#!/bin/bash

# Script para copiar imágenes desde la carpeta original a Landing
SOURCE_DIR="/Users/grillobak/Desktop/Vantyx/vantyx-landing original/public"
TARGET_DIR="/Users/grillobak/Desktop/Vantyx/Landing"

# Crear el directorio de destino si no existe
mkdir -p "$TARGET_DIR"

# Copiar las imágenes que faltan
cp "$SOURCE_DIR/modulo-clientes.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/vantyx-visual-bolsas-marcas.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/luisa_fernandez.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/martin_gonzalez.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/carolina_lopez.png" "$TARGET_DIR/"

echo "Imágenes copiadas exitosamente"
ls -la "$TARGET_DIR"

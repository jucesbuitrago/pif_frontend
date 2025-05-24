import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear directorio de fuentes si no existe
const fontsDir = path.join(__dirname, 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// URLs de las fuentes Glacial Indifference
const fontUrls = {
  regular: 'https://github.com/ThomasJockin/fontfaceobserver/raw/master/fonts/glacial-indifference/GlacialIndifference-Regular.otf',
  bold: 'https://github.com/ThomasJockin/fontfaceobserver/raw/master/fonts/glacial-indifference/GlacialIndifference-Bold.otf'
};

// Función para descargar archivos
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(fontsDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ ${filename} descargado correctamente`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      console.error(`❌ Error al descargar ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Descargar todas las fuentes
async function downloadFonts() {
  try {
    console.log('📥 Descargando fuentes Glacial Indifference...');
    await Promise.all([
      downloadFile(fontUrls.regular, 'GlacialIndifference-Regular.otf'),
      downloadFile(fontUrls.bold, 'GlacialIndifference-Bold.otf')
    ]);
    console.log('🎉 ¡Todas las fuentes se han descargado correctamente!');
  } catch (error) {
    console.error('❌ Error al descargar las fuentes:', error);
    process.exit(1);
  }
}

// Ejecutar la descarga
downloadFonts();

import type { NewsItem } from './types'

export const presentacionLUCIA: NewsItem = {
  slug: 'presentacion-lucia',
  category: 'Resultados',
  date: '02.10.2026',
  title: 'Presentación de LUCIA: una nueva forma de revisar subvenciones',
  excerpt: 'El primer prototipo desarrollado en el marco del convenio ayuda a organizar expedientes, localizar incidencias y facilitar la revisión documental.',
  published: false,
  content: [
    'LUCIA es el primer prototipo creado dentro del convenio para explorar cómo la IA puede ayudar al personal público a revisar solicitudes de subvenciones. Su finalidad es reducir el tiempo dedicado a tareas repetitivas y facilitar la consulta de la información, sin sustituir en ningún caso la valoración de las personas responsables.',
    'La herramienta permite incorporar uno o varios documentos de un expediente, tanto en PDF como en imagen. A partir de ellos, organiza datos relevantes de la solicitud, los gastos, las declaraciones y las autorizaciones, y avisa cuando encuentra información que puede estar incompleta o no coincidir. Cada dato puede contrastarse con el fragmento correspondiente del documento original, lo que hace más sencilla su comprobación.',
    {
      type: 'image',
      src: '/noticias/lucia-ui-inicio.png',
      alt: 'Interfaz de inicio de LUCIA',
      caption: 'Interfaz de inicio de LUCIA, donde se pueden consultar expedientes y añadir nuevas solicitudes para su revisión.',
    },
    'Además de revisar cada expediente de forma individual, LUCIA permite consultar y filtrar el conjunto de solicitudes, corregir manualmente los datos extraídos y exportar información para su análisis. Sus paneles muestran una visión general de la actividad, incluida su distribución territorial y su evolución en el tiempo.',
    {
      type: 'image',
      src: '/noticias/lucia-ui-mapa.png',
      alt: 'Interfaz de mapa de LUCIA',
    },
    {
      type: 'image',
      src: '/noticias/lucia-ui-analisis.png',
      alt: 'Interfaz de análisis de LUCIA',
      caption: 'LUCIA presenta una interfaz intuitiva y fácil de usar para la revisión de solicitudes.',
    },
    'La herramienta permite visualizar con detalle lo que ha extraído de cada documento, lo que facilita la comprobación de los datos y la detección de posibles incidencias. La información se organiza en paneles que muestran el estado de cada solicitud, los gastos declarados, las declaraciones y autorizaciones, y cualquier incidencia detectada.',
    'La propia herramienta permite modificar cualquier campo de la solicitud que contenga un error o bien no haya sido extraído correctamente. Los cambios se registran y pueden exportarse para su análisis posterior.',
    {
      type: 'image',
      src: '/noticias/lucia-ui-detalle.png',
      alt: 'Interfaz de edición y análisis de solicitud de LUCIA',
      caption: 'LUCIA permite revisar y corregir los datos extraídos de cada solicitud, así como consultar el documento original.',
    },
    'LUCIA se plantea como una herramienta de apoyo: presenta la información de manera ordenada, señala posibles incidencias y acerca al documento original, pero la comprobación y la decisión final continúan siempre en manos del personal de la Administración.',
  ],
}

# WEB CONVENIO MDSCA

## Despliegue local

```bash
npm ci
npm run dev
```

## Despliegue en GitHub Pages

La web se publica en **https://innovacionpublica.es/**. Vite usa `base: '/'`:
los recursos y enlaces parten de la raíz del dominio.

### Configuración inicial

1. En **Settings → Pages → Build and deployment**, seleccionar **GitHub Actions** como origen.
2. En **Custom domain**, introducir `innovacionpublica.es` y guardar.
3. En el proveedor DNS, configurar estos registros `A` para el dominio raíz (`@`):

   | Tipo | Nombre | Valor |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

4. Cuando GitHub valide el dominio y emita el certificado, activar **Enforce HTTPS**.

La propagación DNS puede tardar hasta 24 horas. Este despliegue usa un workflow
de GitHub Actions: el dominio se configura en **Settings → Pages**, y no necesita
un archivo `CNAME` en el repositorio. Referencia:
[dominios personalizados en GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

### Publicación de cambios

- Subir los cambios a la rama `main`: el workflow **Deploy to GitHub Pages** instala las dependencias, compila y publica `dist/`.
- También se puede ejecutar desde **Actions → Deploy to GitHub Pages → Run workflow**, seleccionando `main`.
- Esperar a que termine el workflow y comprobar **https://innovacionpublica.es/**.

Para comprobar la compilación antes de publicar:

```bash
npm run lint
npm run build
npm run preview
```

`node_modules/`, `dist/`, las cachés y los archivos de configuración local están
excluidos de Git. Se conservan `package.json` y `package-lock.json` para que
`npm ci` reproduzca la instalación. La compilación se genera en cada despliegue;
no hay que subirla al repositorio.

## Personalización

Los textos, participantes, entidades, hitos y noticias de muestra están centralizados en `src/content.ts`. La imagen principal está en `src/assets/research-team.png` y los estilos en `src/App.css`.

Los logotipos institucionales utilizados en Participantes se encuentran en `public`.

Los originales editables de GIMP de las noticias se conservan en `design/noticias/`.
En `public/noticias/` solo se guardan las imágenes que debe servir la web, ya que
Vite copia todo el contenido de `public/` a `dist/`.

Cada página tiene su propio archivo editable:

- `src/views/Home.tsx`
- `src/views/Participants.tsx`
- `src/views/News.tsx`
- `src/views/NewsDetail.tsx`

Los elementos compartidos están en `src/components` y la configuración de rutas en `src/routes.ts`.

Rutas disponibles:

- `/` — presentación, objetivos, fases y últimas noticias.
- `/participantes` — equipo investigador y entidades colaboradoras.
- `/actualidad` — archivo de noticias con filtros por categoría.

Antes de publicar, sustituye los datos de muestra y conecta los enlaces de cada noticia con su página o gestor de contenidos.

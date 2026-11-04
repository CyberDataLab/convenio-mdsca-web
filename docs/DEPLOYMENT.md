# Despliegue en GitHub Pages

Destino: **https://innovacionpublica.es/**. La configuración de Vite usa `base: '/'` y el workflow publica la compilación desde `dist/`.

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


# WEB CONVENIO MDSCA

## Desarrollo

## Despliegue local

```bash
npm install
npm run dev
```

## Despliegue en github Pages

 - Subir cambios a la rama `main` del repositorio.
 - Si el workflow de GitHub Actions no está activo, ir a **Actions → Deploy to GitHub Pages → Run workflow**.
 - Activar el workflow de GitHub Actions en **Actions → Deploy to GitHub Pages → Run workflow**.
 - Seleccionar la rama `main` y pulsar **Run workflow**.
 - Esperar a que finalice el workflow y comprobar que la web se ha publicado.

## Personalización

Los textos, participantes, entidades, hitos y noticias de muestra están centralizados en `src/content.ts`. La imagen principal está en `src/assets/research-team.png` y los estilos en `src/App.css`.

Los logotipos institucionales utilizados en Participantes se encuentran en `public`.

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

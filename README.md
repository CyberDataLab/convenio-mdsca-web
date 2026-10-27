# lucia

Base web institucional para presentar un proyecto de investigación desarrollado en convenio con la administración pública.

## Desarrollo

```bash
npm install
npm run dev
```

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

## Despliegue en GitHub Pages

Cada envío a la rama `main` compila y publica automáticamente la web mediante GitHub Actions. En la configuración del repositorio, selecciona **Settings → Pages → Source → GitHub Actions**.

La web está configurada para publicarse en `/web-convenio/` y utiliza rutas con `#` para que las páginas internas funcionen también al recargar, por ejemplo `/web-convenio/#/actualidad`.

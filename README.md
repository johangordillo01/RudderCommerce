# Rudder Commerce + Johan Gordillo

Sitio estático con dos páginas, desplegado en Vercel desde un solo proyecto.

| Ruta | Página | Dominio previsto |
|---|---|---|
| `/` (archivo en `rudder/`) | Página de venta de Rudder Commerce | ruddercommerce.com |
| `/johan` | Web personal de Johan Gordillo | johan.ruddercommerce.com |
| `/cv` | Hoja de vida (imprimible a PDF) | johan.ruddercommerce.com/cv |
| `/privacidad` | Política de tratamiento de datos (Ley 1581 de 2012) | ruddercommerce.com/privacidad |

## Estructura

```
rudder/index.html     Rudder Commerce (escena 3D con Three.js, calculadora)
johan/index.html      Web personal ("Del plano al producto")
cv/index.html         Hoja de vida
privacidad/index.html Política de privacidad
assets/               Logos, Ruddy, retrato, favicon y la hoja de vida en PDF
vercel.json           URLs limpias y reescritura por dominio para johan.ruddercommerce.com
```

No hay paso de compilación: son archivos HTML con estilos en línea. Three.js (r149) y las fuentes (Inter y Plus Jakarta Sans) se cargan desde CDN.

## Ver en local

```
npx serve .
```

## Desplegar

Conecta este repositorio a un proyecto de Vercel con *Framework Preset: Other* y sin comando de build. Cada `git push` a `main` publica una nueva versión.

Para el dominio personal, agrega `johan.ruddercommerce.com` al mismo proyecto: las reglas de `vercel.json` muestran `/johan` en la raíz de ese subdominio y `/rudder` en la raíz de ruddercommerce.com.

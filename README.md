# Ejercicio Recetario

## Objetivos

- Implementar nuevas funciones de lógica de dominio  
- Codificar test unitarios en paralelo a la implementación  
- Usar buenas prácticas de codificación  
- Modificar la interfaz de usuario para usar las nuevas funciones  

### Aspectos a tener en cuenta

- Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.  
- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.  
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.  
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.  
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.  
- Ejecute el linter con `npm run lint` para eliminar errores y warnings.  

> Recuerde al finalizar cada parte:
>
> - realizar commit / push  
> - subir un issue con screenshots  

---

### Parte A

1. En la clase `Recipe` agregar el campo `difficulty`.  
   - El campo representa la dificultad de la receta (`"fácil"`, `"media"` o `"difícil"`).  
   - Implementar las funciones `getDifficulty()` y `setDifficulty()` validando que el valor recibido sea válido.  
   - Modificar la función `toString()` mostrando también la dificultad.  
   - Codificar test unitarios para las nuevas funciones.
     - Incluir test para casos de error.  
     - La cobertura de los test unitarios debe alcanzar el 100 %.  

2. En la clase `RecipeBook` implementar la función `countByDifficulty()` que retorna un objeto con el total de recetas agrupadas por dificultad.  
   Ejemplo:  
   ```js
   { facil: 3, media: 2, dificil: 1 }
   ```

### Parte B

Agregar elementos a la interfaz de usuario para usar las nuevas funciones.

1. Campo 'Dificultad' en el formulario 'Nueva receta'.  
   - El campo debe permitir seleccionar entre `"fácil"`, `"media"` o `"difícil"`.

2. Mostrar 'Total recetas por dificultad' en el panel 'Inicio'.  
   - Debe mostrar el conteo de recetas agrupadas por cada nivel de dificultad usando la función `countByDifficulty()`.

3. Usar el componente card de Bootstrap para mostrar las recetas en los paneles 'Fácil', 'Media' y 'Difícil'.  
   - Usar el nombre de la receta como título en cada card.  
   - En el cuerpo del card mostrar: ingredientes y dificultad.

4. Subir un issue 'Parte B' con screenshot de la página en el navegador (paneles Inicio y Nueva receta).
# int-fis

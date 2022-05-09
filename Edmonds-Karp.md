---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-27
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %> (EK)
Una posibilidad es, en vez de usar DFS, usar una variación de Dijkstra para buscar un camino de máximo aumento de flujo.
Otra posibilidad es, en vez de usar DFS, usar BFS, eso equivale a decir que, de entre todos los caminos aumentantes, elegimos uno que tenga la longitud mínima.

Luego de que Ford y Fulkerson propusieran su algoritmo, Edmonds y Karp propusieron estas dos alternativas:
* Aumentar eligiendo **caminos de longitud mínima**
* Aumentar eligiendo **caminos de aumento máximo**. 

Demostraron que en ambos casos el algoritmo siempre termina. 
Y que en el caso de aumento máximo, el algoritmo es polinomial en n, m y las capacidades. 
Pero demostraron que en el caso de aumentar por caminos mínimos, el algoritmo es polinomial en n, m solamente. 
Por lo tanto ese es el algoritmo preferido, y el que se llama “algoritmo de Edmonds-Karp”. Una buena forma de recordarlo es que **==EK=FF+BFS==**. 
Pareceria que no es mucho lo que hicieron Edmonds y Karp, meramente sugerir usar BFS. 
Pero lo importante no fue sólo sugerir usar BFS, sino que dieron una prueba de que el algoritmo resultante es polinomial.

Ver ejemplos en MD_T08_EdmondsKarp.pdf

## Complejidad de EK
>**Teorema de Edmonds-Karp**
>La complejidad del algoritmo de Edmonds-Karp es $O(nm^2)$

### Prueba
COMPLETAR MD_T09_complejidadEdmondsKarp

---
References: 
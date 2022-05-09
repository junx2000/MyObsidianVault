---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-07 15:03

---
# Componentes conexas de un grafo
Un componente conexo es un subgrafo inducido de un grafo en que cualesquiera dos vértices están conectados mediante un camino.

## Como determinamos las componentes conexas de un grafo?
Se hace uso de BFS o DFS como parte del algoritmo. 
Los algoritmos pueden ser implementados simplemente buscando los vértices, o ademas agregando los lados entre un vértice que ya estaba agregado y los vértices que ese vértice agregó. En este ultimo caso, las componentes conexas que se obtengan serán árboles.

### Usando BFS:
``````
Crear una cola con x como único elemento.
Tomar C = {x}.
WHILE la cola no sea vacia:
	Tomar p=el primer elemento de la cola.
	Borrar p de la cola.
	IF existen vértices de Γ(p) que no esten en C:
		Agregar todos los elementos de Γ(p) que no estén en C a la cola y a C.
ENDWHILE
return C.
``````

### Usando DFS
``````
Crear una pila con x como único elemento.
Tomar C = {x}.
WHILE la pila no sea vacia:
	Tomar p=el primer elemento de la pila.
	IF existe algún vértice de Γ(p) que no esté en C:
		Tomar un q ∈ Γ(p) − C.
		Hacer C = C ∪ {q}.
		Agregar q a la pila.
	ELSE:
		Borrar p de la pila.
ENDWHILE
return C.
``````

#### Complejidad
Tanto BFS como DFS tienen complejidad $O(m)$

---
References: 
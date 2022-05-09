# <%+ tp.file.title %>
* [[Grafos no dirigidos]]
	* [[Subgrafo]]
	* [[Vecinos de un vertice]]
	* [[Grado de un vertice]]
	* [[Grafos regulares]]
	* [[Grafo ciclico]]
	* [[Grafo completo]]
	* [[Componentes conexas de un grafo]]
	* [[Grafos conexos]]
	* [[Camino entre vertices]]
* [[Coloreo de grafos]]
	* Greedy
		* Error de Greedy
		* Brooks
		* Reordenes
	* 2COLOR
		* [[Grafos bipartitos]]
* Algoritmos Genéticos
	* Introducción al problema general
	* Ejemplos
	* Crossover
	* Selection
* [[Network y Flujos]]
	* Introducción
	* Herramientas matemáticas
		* [[Grafos dirigidos]]
		* [[Vecinos hacia delante y hacia atras de un vertice]]
		* Networks (redes)
		* Flujos
		* Flujos maximales
		* Greedy
			* Idea general 
			* Greedy 
			* Ejemplos 
			* Limitaciones de Greedy
		* Cortes
	* [[Ford-Fulkerson]]
		* [[Camino aumentante]]
		* Algoritmo de Ford-Fulkerson 
			* Algoritmo de FF
			* Comparación con Greedy 
			* Primera propiedad que necesitamos probar 
		* Max Flow Min Cut Theorem
		* Consecuencias 
			* Correctitud del algoritmo de Ford-Fulkerson 
			* S como certificado
			* Teorema de la Integralidad
		* Ejemplos de Ford-Fulkerson
	* [[Edmonds-Karp]]
		* Algoritmo de Edmonds-Karp
		* Complejidad de Edmonds-Karp
			* Enunciado del teorema y primera parte de la prueba
				* Lados Críticos 
				* d, b 
				* Lema de las distancias
			* Acotando número de eventos de criticalidad
				* Caso lado se saturó en el paso k 
				* Caso lado se vació en el paso k
			* Parte final
	* [[Dinitz (-Even)]]
		* Introducción 
			* Un poco de historia
		* Networks auxiliares
			* [[Network por niveles]]
	* Dinitz vs Dinic(-Even)
		* Complejidad “naive” de Dinitz
		* Diferencia entre la version rusa y la occidental de Dinitz
		* Complejidad del algoritmo de Dinitz
			* Cota superior del número de networks auxiliares
			* Complejidad del paso bloqueante en Dinitz 
				* Complejidad de Dinitz original 
				* Pseudocódigo de Dinic-Even 
				* Complejidad de Dinic-Even
			* Detalles sobre el network auxiliar
	* Algoritmo Wave de Tarjan
		* Descripción de Wave 
			* Introducción 
			* MKM 
			* Wave
		* Complejidad de Wave 
		* Push-relabel
		* ejemplowavela
* P vs NP
	* Problemas de decisión 
	* P 
	* NP 
		* Introducción
		* Definición y ejemplos 
		* Certificados 
		* SAT
	* NP completitud 
		* Reducción Polinomial 
		* NP completo 
		* Teorema de Cook
	* Teoremas de Karp
	* 3SAT 
		* Construcción 
		* B sat ⇒ B˜ sat B˜ sat ⇒ B sat 3COLOR 
		* Construcción de G B sat ⇒ χ(G) = 3 χ(G) = 3 ⇒ B sat
* Matchings
	* Definición y problema 
	* Reducción del problema de encontrar matching maximales a flujos 
	* Ejemplo 
		* Rehaciendo el ejemplo con matrices
	* Teoremas de Hall y Konig 
		* Perfección y Completitud 
		* Teorema de Hall Teorema del Matrimonio de Konig 
		* Teorema de Konig sobre coloreo lateral de grafos bipartitos
* Matchings Pesados
	* Grafos bipartitos con pesos en los lados 
	* Algoritmo de minimizar el máximo (de Gross)
	* Complejidades 
		* Complejidad del algoritmo para encontrar matching maximal
		* Complejidad del algoritmo de minimizar máximo
	* Ejemplo de minimizar el máximo
	* Primera parte del Algoritmo Húngaro
		* Propiedad obvia
		* Propiedad casi obvia
		* Usando ambas propiedades
		* ejemplos
	* Húngaro completo
		* Completando el algoritmo Húngaro
		* Terminando el ejemplo
		* resumen del Húngaro
		* Ejemplo completo del Húngaro
	* Complejidad del Hungaro
		* Complejidad de la implementación que vimos del Húngaro
			* Parte inicial
			* Teorema principal
			* Complejidad de extender el matching en un lado
			* Complejidad del cambio de matriz
			* Acotando el número de cambios de matriz
		* Implementación mas eficiente
			* Calculo de m en O(n)
			* Restar y sumar m en O(n)
* Códigos de Corrección de Errores
	* Elementos básicos de códigos
		* Ejemplo introductorio
		* Definiciones y propiedades básicas
		* Suposiciones
		* Algunos ejemplos
	* Distancia y δ
		* Definiciones y ejemplos
		* La distancia de Hamming es distancia
		* Detección y Corrección
		* Teorema de δ.
		* Cota de Hamming
	* Códigos de Corrección de Errores Lineales
		* Definición de códigos lineales y repaso
			* Definición
			* Subespacios vectoriales sobre el cuerpo {0, 1}.
			* Ejemplos
			* δ de códigos lineales
		* Codificación y Decodificación
			* Dimensión de un código lineal
			* Codificación
			* Transformaciones lineales y matrices
			* Matriz Generadora
			* Ejemplos
			* Ventajas de los códigos lineales
		* Matriz de Chequeo
			* Dimensiones de la matriz de chequeo
			* Corrección de un error usando la matriz de chequeo
			* Relación entre matriz de chequeo y la generadora
			* Teorema de Delta y H
			* Corolario y ejemplos de aplicación.
		* Códigos de Hamming
			* Propiedades y ejemplos
			* Hamming extendidos
		* Cota Singleton
		* Para corregir mas de un error
			* Método general
			* Códigos de repetición
	* Códigos Cíclicos
		* Definiciones y nociones básicas
			* Definición de Códigos Cíclicos
			* Polinomios
			* Utilidad de mirar las palabras como polinomios
		* Polinomio Generador
			* Teorema fundamental de Códigos Cíclicos
			* Métodos de codificación
		* Reed Solomon
			* Cuerpos finitos
			* Elemento primitivo
			* codigo de Reed-Solomon


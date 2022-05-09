---
aliases: 
tags: working
created_date: 2022-05-08
references: Notas Modelos y Simulacion 2022
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>

## Metodo de la tranformada inversa
Consideremos una variable aleatoria discreta X, con funcion de probabilidad de masa dada por:
$$
P(X = x_j ) = p_j , \quad \quad j = 0, 1, \cdots , \quad \quad 0 \lt p_j \lt 1
$$
donde los valores $\{x_n\}$ de la variable estan ordenados en forma creciente. Esto es, si  $i \lt j$ entonces $x_i \lt x_j$.
La funcion de distribucion acumulada de $X$, $F_X$, satisface:
$$
F_X(x) = \left\{
\begin{array}{lll}
0 && x \lt x_0 \\
p_0 && x_0 \leq x \lt x_1 \\
p_0 + p_1 && x_1 \leq x \lt x_2 \\
\vdots && \vdots \\
p_0 + p_1 + \cdots + p_{n-1} && x_{n-1} \leq x \lt x_n \\
\cdots && \cdots

\end{array}
\right.
$$
El metodo de la transformada inversa lleva este nombre porque se basa en la inversa de la funcion de distribucion acumulada $F_X$. Es claro que si $X$ es una variable aleatoria discreta, entonces $F_X$ no es inyectiva y por lo tanto tampoco es inversible, pero si establece una correspondencia biun´ıvoca entre ciertos subintervalos de $[0, 1)$ y los valores de la variable aleatoria $X$ a traves de la funcion de distribucion $F_X$. La correspondencia es la siguiente:
$$
\begin{array}{rll}
x_0 \to I_0 &=& [0, p_0) \\
x_1 \to I_1 &=& [p_0, p_0 + p_1) \\
x_2 \to I_2 &=& [p_0 + p_1, p_0 + p_1 + p_2) \\
\vdots && \vdots
\end{array}
$$

Notemos que estos subintervalos del intervalo $[0, 1)$ son disjuntos, su union es el intervalo $[0, 1)$ y la longitud de $I_j$ es $p_j$ . Por otro lado, si consideramos una variable 
aleatoria con distribucion uniforme uniforme $U ∼ U(0, 1)$, entonces la probabilidad que $U$ tome valores en el intervalo $I_j$ es $p_j$:
$$
P(p0 + \cdots + pj−1 ≤ U < p0 + p1 + p2 + · · · + pj ) = pj .
$$
El metodo de la transformada inversa propone generar valores de $X$ generando una variable aleatoria uniforme, y segun a que intervalo pertenece $U$ es el valor de $X$ que se genera. Es decir: si $U \in [0, p_0)$, se genera $x_0$. Si $U \in [p_0, p_0 + p_1)$, se genera $x_1$, y asi siguiendo.
El algoritmo general para una variable aleatoria discreta que toma un numero finito de valores es como el siguiente:

```python
# x: vector de valores posibles de X
# p: vector de probabilidades
def discretaX(p, x):
	U = random()
	i, F = 0, p[0]
	while U >= F:
		i, F = i + 1, F + p[i]
	return x[i]
```

Una primera mejora que puede hacerse a este algoritmo, y que en general vale para cualquier generador de variables aleatorias discretas, es ordenar las probabilidades de mayor a menor manteniendo la correspondencia entre estas probabilidades y los valores a generar. Esto reduce el numero de comparaciones puesto que cada condicional ($U \lt F_X$) es mas probable que sea aceptado cuanto mayor sea $F_X$.

### Generacion de una variable aleatoria uniforme discreta
Si $X$ es una variable con distribucion uniforme discreta en $\{1, \cdots , n\}$ entonces $p1 = p_2 = \cdots = p_n = \frac{1}{n}$ . La aplicacion del metodo de la transformada inversa conduce al siguiente algoritmo:

```python
def udiscreta(n):
	U = random()
	x = 1; F = 1/n
	while U >= F:
		F += 1 / n
		x += 1
	return x
```

Este algoritmo recorre los subintervalos de longitud $\frac{1}{n}$
hasta encontrar aquel donde se encuentra el valor de $U$. El algoritmo arrojara el valor $X = j$ si y solo si $U$ se encuentra en el $j$-esimo subintervalo, es decir que se verifica:
$$
\frac{j - 1}{n} \leq U \lt \frac{j}{n}
$$
Ahora bien, esto implica que $nU$ pertenece al intervalo $[j − 1, j)$, y por lo tanto la parte entera inferior de $nU$, $\left \lfloor n U \right \rfloor$, satisface
$$
\left \lfloor n U \right \rfloor + 1 = j
$$
Asi, el algoritmo puede reescribirse como:

```python
def udiscreta(n): 
	U = random() 
	return int(n * U) + 1
```

Este algoritmo puede extenderse al caso de generacion de una variable aleatoria discreta uniforme con valores enteros en el intervalo $[m, k]$, esto es, $U \sim U[m, k]$. Notemos que $X$ toma $k − m + 1$ valores:
$$
m, \quad m+1, \quad m+2, \quad \; \quad k = m + (k - m)
$$
Por lo tanto es suficiente generar una variable uniforme con valores en $[1, k − m + 1]$ y sumarle $m − 1$ a cada valor.

```python
def udiscreta(m,k):
	U = random()
	return int(U * (k - m + 1)) + m

```

#### Generacion de una permutacion aleatoria de un conjunto de cardinal $N$
Una aplicacion de la generacion de variables aleatorias con distribucion uniforme discreta es el de generar permutaciones aleatorias en un conjunto de cardinal $N$. 
El numero de permutaciones de un conjunto de $N$ elementos es $N!$, y el objetivo es poder generar permutaciones equiprobables, es decir, cada una con probabilidad $\frac{1}{N!}$ de ocurrencia.
Consideramos un ordenamiento de los elementos de un conjunto $A$, de cardinal $N$:
$$
(a_0, a_1, \cdots, a_{N-1})
$$
Si se intercambia $a_0$ con algun elemento de $\{a_0, \cdots, a_{N−1}\}$ elegido aleatoriamente, luego $a_1$ con alguno de $\{a_1,  \cdots, a_{N−1}\}$ y asi siguiendo hasta intercambiar $a_{N−2}$ con un elemento de $\{a_{N−2}, a_{N−1}\}$, entonces el metodo genera todas las permutaciones con igual probabilidad:

```python
def permutacion(a): #a=[a[0], a[1], ..., a[N-1]]
	N = len(a)
	for j in range(N-1):
		indice = int((N-j) * random()) + j
		a[j], a[indice] = a[indice], a[j]
	return a
```

Notemos que en los sucesivos pasos se generan uniformes en los intervalos de enteros $[0, N −1], [1, N − 1], \cdots , [N − 2, N − 1]$. 
Si se recorre el arreglo en sentido inverso, comenzando por intercambiar $a_{N−1}$ en lugar de $a_0$, entonces el algoritmo requiere generar uniformes en $[0, N − 1], [0, N − 2], \cdots, [0, 1]$, que se reducen a calcular una parte entera inferior:

```python
def permutacion(a): #a=[a[0],a[1],...,a[N-1]]
	N = len(a)
	for j in range(N-1,0,-1):
		indice = int((j+1) * random())
		a[j], a[indice] = a[indice], a[j]
	return a
```

En ciertos casos de muestreo se requiere obtener un subconjunto aleatorio de cierto conjunto de individuos. Es decir, dado un conjunto de $N$ elementos, obtener un subconjunto de $r$ elementos, con $r \lt N$, pero elegidos aleatoriamente.
Si el ciclo del algoritmo anterior se ejecuta para j = $N−1, N−2,  \cdots, N-r$, los ultimos $r$ elementos del vector permutado forman un subconjunto aleatorio de cardinal $r$, y en consecuencia los restantes forman un subconjunto aleatorio de tamaño $N − r$. 
Asi, para mayor eficiencia, si $r < N/2$ conviene ejecutar el algoritmo $r$ veces y tomar los ultimos $r$ elementos, y de lo
contrario conviene ejecutarlo $N − r$ veces, y tomar los $r$ primeros.

```python
## Devuelve un subconjunto aleatorio de A de r elementos
def subcAleatorio(r,A):
	N = len(A)
	for j in range(N-1, N-1-r, -1):
		indice = int((j+1) * random())
		A[j], A[indice] = A[indice], A[j]
	return A[n-r:]
```

Un metodo alternativo para obtener permutaciones aleatorias de un conjunto de cardinal $N$ consiste en generar $N$ numeros aleatorios: $u_0, u_1, \cdots, u_{N−1}$, y luego ordenarlos, por ejemplo, de menor a mayor:
$$
u_{i_0} \lt u_{i_1} \lt \cdots \lt u_{i_{N-1}}
$$
Asi, los indices de los numeros ya ordenados forman una permutacion del conjunto $\{1, 2, \cdots, N\}$:
$$
(i_0, i_1, \cdots, i_{N-1})
$$
Sin embargo este metodo tiene la desventaja de requerir $O(Nlog(N))$ comparaciones.

### Calculo de promedios
Recordemos que [[el Metodo de Monte Carlo]] se basa en dos resultados teoricos fundamentales: la Ley Fuerte de los Grandes Numeros, y la posibilidad de calcular el valor esperado $E[g(X)]$ a partir de la funcion de densidad o de probabilidad de masa, segun corresponda, de la variable aleatoria $X$.
Supongamos que se quiere calcular un promedio de una gran cantidad de valores:
$$
\bar{a} = \frac{1}{N} \sum_{i=1}^{N} a_i =
\frac{a_1 + a_2 + \cdots a_N}{N}
$$

donde $N \gg 1$, y que por la gran cantidad de terminos o por la complejidad de estos resulta muy complicado calcular la suma. 
Notemos que si $X$ es una variable aleatoria uniforme discreta en $[1, N]$, y $g$ es una funcion tal que $g(i) = a_i$, entonces el valor que se desea calcular es justamente $E[g(X)]$:
$$
\bar{a} = E[g(X)]
$$
Luego, por la Ley Fuerte de los grandes numeros, se tiene que si $X_1, X_2, \cdots, X_n, \cdots$ son variables aleatorias independientes, uniformes en $[1, N]$, entonces
$$
\frac{1}{n} (g(X_1) + \cdots + g(X_n)) \simeq
\frac{1}{n} (a_{X_1} + \cdots + a_{X_n}) = \bar{a}
$$
Asi el valor de a se puede estimar como un promedio de $N$ terminos de la sumatoria elegidos al azar:
$$
\bar{a} \sim \frac{1}{M} \sum_{j=1}^{M} a_{i_j}
$$
### Generacion de una variable aleatoria geometrica
COMPLETAR pag 75 - Notas de Modelos y Simulaciones

```python
def geometrica(p):
	U=1-random()
	return int(log(U)/log(1-p))+1
```

### Generacion de variables Bernoulli
Un metodo sencillo de generar valores de una Bernoulli $B(p)$ es:
```python
def Bernoulli(p):
	U=random()
	if U < p: return 1
	else: return 0

```

COMPLETAR pag 76 - Notas de Modelos y Simulaciones
```python
# devuelve una lista de N Bernoullis B(p)
def NBernoullis(N,p):
	Bernoullis = [0] * N
	j = geometrica(p)-1
	while j < N:
		Bernoullis[j] = 1
		j += geometrica(p)
	return Bernoullis
```

### Generacion de una variable aleatoria Poisson
```python
# algoritmo obtenido por el metodo de la transformada inversa
def Poisson(lamda):
	U = random()
	i = 0; p = exp(-lamda)
	F = p
	while U >= F: 
		i += 1 
		p *= lamda / i 
		F = F + p 
	return i
```

```python
# Optimizacion
def Poisson(lamda):
	p = exp(-lamda); F = p
	for j in range(1, int(lamda) + 1):
		p *= lamda / j
		F += p
	U = random()
	if U >= F:
		j = int(lamda) + 1
		while U >= F:
			p *= lamda / j; F += p
			j += 1
		return j - 1
	else:
		j = int(lamda)
		while U < F:
			F -= p; p *= j/lamda
			j -= 1
	return j+1

```

### Generacion de una variable aleatoria binomial
```python
# algoritmo obtenido por el metodo de la transformada inversa
def Binomial(n,p):
	c = p / (1 - p)
	prob = (1 - p) ** n
	F = prob; i=0
	U = random()
	while U >= F:
		prob *= c * (n-i) / (i+1)
		F += prob
		i += 1
	return i
```

## Metodo de aceptacion y rechazo
El **metodo de aceptacion y rechazo** o **metodo de rechazo** para generar una variable aleatoria $X$, supone el conocimiento de un metodo para la generacion de otra variable aleatoria $Y$ que cumpla con las siguientes propiedades:

- Si $P(X = x_j ) > 0$$, para todo $x_j$ en el rango de $X$.
- Existe una constante positiva $c$ tal que:
  $$
  \frac{P(X = x_j)}{P(Y = y_j)} \leq c
  $$
  para todos los $x_j$ tal que $P(X = x_j ) > 0$.

Si denotamos $p_j = P(X = x_j )$ y $q_j = P(Y = x_j )$, entonces de la segunda propiedad vemos que:
$$
\sum_{j \geq 1} p_j \leq c \cdot \sum_{j \geq 1} q_j \leq c
$$
Como el miembro izquierdo de la desigualdad es 1, se tiene que la constante $c$ es siempre mayor o igual a 1. 
Ademas la igualdad se daria solo en el caso en que $X$ e $Y$ tienen la misma distribucion de probabilidad, en cuyo caso ya se tendria un metodo para generar $X$. 
Asumimos entonces que $c \gt 1$, y por lo tanto $\frac{1}{c} \lt 1$.

```python
1. Simular Y
2. U = random()
3. if U < p(Y) / (c * q(Y)): 
	1. return Y # aceptacion: X=Y
4. else: 
5. volver a 1 # rechazo
```

Como puede verse de la descripcion del algoritmo, se trata de una iteracion de pasos que se repite en caso de un rechazo y finaliza en una aceptacion. 
Existe en esto una cierta analogia con una variable geometrica, en el sentido que se continua el ciclo o ejecucion de los condicionales (ensayos) hasta que se obtiene un exito: aceptar el valor de $Y$
En efecto, en cada paso, la probabilidad de generar algun valor de $X$ es la probabilidad de aceptar el valor de $Y$ en esa iteracion, y esto esta dado por:
$$
\begin{array}{rll}
P(\text{aceptar } Y) &=& P \left( \left\{ Y = y_1, U \lt \frac{p_1}{c q_1} \right\} \cup \left\{ Y = y_2, U \lt \frac{p_2}{c q_2} \right\} \cup \cdots \right) \\
&=& P \left( \bigcup_{j \geq 1} \left\{ Y = y_j, U \lt \frac{p_j}{c q_j} \right\} \right)
\end{array}
$$
Notemos que esta union es disjunta, y ademas $U$ e $Y$ son independientes. Por lo tanto resulta:
$$
\begin{array}{rll}
P(\text{aceptar } Y) &=& \sum_{j \geq 1} P(Y = y_j) \cdot P(U \leq \frac{p_j}{c q_j}) \\
&=& \sum_{j \geq 1} q_j \cdot \frac{p_j}{c q_j} \\
&=& \frac{1}{c}
\end{array}
$$
Ahora bien, un valor particular $x_j$ de la variable $X$ sera generado si y solo si es generado en alguna iteracion:
$$
\begin{array}{rll}
P(\text{generar } x_j) &=&
\sum_{k \geq 1} P(\text{generar } x_j \text{ en la iteracion } k) \\
&=& \sum_{k \geq 1} P(\text{rechazar } Y (k-1) \text{ veces y aceptar } Y = x_j \text{ en la iteracion } k) \\
&=&
\sum_{k \geq 1} (1-\frac{1}{c})^{k-1} P(Y= x_j, U \leq \frac{p_j}{c q_j}) \\
&=& \sum_{k \geq 1} (1-\frac{1}{c})^{k-1} q_j \frac{p_j}{c q_j} \\
&=& p_j
\end{array}
$$
Por lo tanto, el algoritmo simula una variable aleatoria con la distribucion deseada. Ademas, el numero de iteraciones del algoritmo hasta aceptar el valor de $Y$ es una variable aleatoria geometrica con probabilidad de exito $\frac{1}{c}$ y de fracaso $1−\frac{1}{c}$ . Por lo tanto, cuanto menor sea $c$ mas eficiente sera el algoritmo.

## Metodo de composicion
COMPLETAR pag 81-83

## Metodos alternativos
COMPLETAR pag 83-88 
### El metodo del alias
### Metodo de la urna
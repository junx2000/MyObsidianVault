---
aliases: [numero aleatorio]
tags: working
created_date: 2022-05-04
references: Notas Modelos y Simulacion 2022
---

Links: 
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
## Propiedades de un generador de numeros aleatorios
Por generador de numeros pseudoaleatorios entenderemos un algoritmo capaz de producir secuencias de numeros: $u_1, u_2, . . . , u_N$, que sean realizaciones de muestras de tamaño $N$ de una variable aleatoria uniforme $U \sim U(0, 1)$. Para ello debemos acordar que entendemos por una *muestra* de esta variable.

> **Definition**
> Una $N$-upla de variables aleatorias $(U_1, U_2,\cdots, U_N )$ es una muestra de tamaño $N$ de una variable aleatoria uniforme en $(0, 1)$ si cumple:
>
> **(1)** Para cada $i = 1,\cdots, N$ y cada $u \in \mathbb{R}$ vale
> $$
\mathbb{P}(U_i \leq u) = 
\left\{
\begin{array}{l}
0 \quad \text{si} \quad u \lt 0  \\
u \quad \text{si} \quad 0 \leq u \leq 1 \\
1 \quad \text{si} \quad u \gt 1
\end{array}
\right.$$
> **(2)** Para cada $k$ con $2 \leq k \leq N$ y cada $k$-upla $(i_1, i_2, \cdots, i_k)$ con $1 \leq i_1 \lt \cdots \lt i_k \leq N$ vale que
> $$
\mathbb{P}(U_{i_1} \leq u_1,\cdots, U_{i_k} \leq u_k) = \mathbb{P}(U_{i_1} \leq u_1) \cdots \mathbb{P}(U_{i_k} \leq u_k)
$$
> cualesquiera sean $u_1,\cdots, u_k$

Ademas de satisfacer las propiedades (1) y (2), un buen generador deberia satisfacer, en la mejor medida posible, las dos siguientes propiedades:

**(a)** **repetibilidad** y **portabilidad**
**(b)** **velocidad computacional**

Por **repetibilidad** se entiende que, si en ocasiones repetidas se dan los mismos parametros, el generador debe producir la misma sucesion. Esta propiedad garantiza que los resultados de una simulacion sean confiables. 
**Portabilidad** significa que, sobre las mismas condiciones de definicion, la sucesion sea la 
misma, independientemente del lenguaje computacional usado para implementar el algoritmo de generacion, y de la computadora utilizada. Esta propiedad suele ser dificil de alcanzar, pero aun asi es un aspecto deseable.
La **velocidad computacional** esta estrictamente ligada a la precision deseada en los resultados finales de la simulacion para la cual el generador es utilizado. Cuanto mas rapido sea el generador, mas resultados seran obtenidos en el mismo tiempo de uso del computador.

## Principios generales
Al definir un generador, hay ciertos principios generales que deben satisfacerse, ademas de
las condiciones que ya hemos marcado

**(P1)** La secuencia generada debe ser intuitivamente aleatoria.
**(P2)** Esa aleatoriedad debe ser establecida teoricamente o, al menos, debe pasar ciertos tests de aleatoriedad. La aleatoriedad de una secuencia jamas debe ser asumida sin esas verificaciones.
**(P3)** Debe conocerse algo sobre las propiedades teoricas del generador.

El principio (P1) es ciertamente razonable. No deberia ser posible poder anticipar cual es el siguiente numero en una secuencia si esta es aleatoria. 
El principio (P2) se refiere a que deben satisfacerse tests estadisticos en relacion a las condiciones (1) y (2) de la Definicion.
La premisa, (P3), es para poder garantizar de manera teorica la condicion de repetibilidad del generador.

Estos principios generales indican que los generadores ad hoc deben ser evitados. Es decir, no cualquier algoritmo que genere numeros arbitrariamente entre 0 y 1 debe considerarse un buen generador.

## Generadores congruenciales
Los generadores que analizaremos a continuacion producen una secuencia de numeros enteros
$$
y_1, y_2, \cdots , y_N , y_j \in \{0, 1, \cdots , M − 1\}
$$
para un cierto entero positivo $M$ ”grande”, y a partir de esta muestra se considera la sucesion de numeros en $[0, 1)$ como
$$
u_1 = \frac{y_1}{M} , \; u_2 = \frac{y_2}{M} , \; \cdots \; , u_N = \frac{y_N}{M}, \; \cdots
$$
Nos ocuparemos entonces de generar secuencias de numeros enteros:
$$
y_n = f(y_{n−1}) \; mod \; M
$$
para algun $M$ entero positivo, y comenzando de un valor inicial (**semilla**) $y_0$.

### Generadores congruenciales lineales
> **Definition**
> Sea $M$ un entero positivo, $M \geq 2$. Una sucesion $y_1, y_2, \cdots , y_n, \cdots$ con valores en $\{0, 1, \cdots , M − 1\}$ se dice **generada por el generador congruencial lineal con parametros** $a$, $c$ y $M$ y **semilla** $y_0$ si
> $$
y_n = (a y_{n−1} + c) \; mod \; M, \quad n \geq 1 $$
> donde $a$, $c$ e $y_0$ son enteros del conjunto $\{0, 1, \cdots , M − 1\}$.

En la terminologia usual $a$ se dice un **multiplicador**, $c$ es el **incremento** y $M$ es el **modulo**. Si $c \neq 0$ el generador se dice **mixto** y si $c = 0$ se dice **multiplicativo**.

``` python
def randMixto(a,c,M,u): 
	return (a*u+c) % M 
def randMulti(a,M,u): 
	return (a*u) % M
```

Es claro que la secuencia puede tener a lo sumo $M$ numeros diferentes, y que si un numero se repite entonces tambien se repite la secuencia que sigue a ese numero. Entonces, si $K$ es el menor numero tal que
$$
y_n = y_{n+K}, \quad \text{para todo } n \geq N_0
$$
para algun $N_0$, diremos que $K$ es el periodo de la secuencia $y_0, y_1, \cdots$. Claramente, $K ≤ M$.

### Generadores mixtos
> **Theorem**
> Consideremos una secuencia dada por el generador:
> $$
y_{i+1} = a \; y_i + c \; mod \; M, \quad c \neq 0 $$
> Entonces la secuencia tiene periodo $M$ si y solo si se cumplen todas las siguientes condiciones:
> El maximo comun divisor entre $c$ y $M$ es 1:  $mcd(c, M) = 1$.
> $a \equiv 1 \; mod \; p$, para cualquier factor primo $p$ de $M$.
> Si 4 divide a $M$, entonces $a \equiv 1 \; mod \; 4$.

### Generadores multiplicativos
Una desventaja de un generador mixto es que para cada valor generado se efectua una suma, operacion que no se realiza para un generador multiplicativo. Si bien en este caso el periodo de la secuencia puede ser a lo sumo $M − 1$, es preferible usar este tipo de generadores para ganar en velocidad y costo operacional.
Veamos entonces que condiciones debe tener un generador multiplicativo para poder obtener un periodo maximo, $K = M − 1$. 

> **Definition**
> Sea M un numero natural. Se dice que $a$ es una raiz primitiva de $M$ si
> $$
a^{(M−1)/p} \not\equiv 1 \; mod \; (M) $$
> para cualquier factor primo $p$ de $M − 1$.

> **Theorem**
> Para un generador multiplicativo:
> $$
y_{i+1} = a \; y_i \; mod \; M $$
> el periodo $K$ de la secuencia verifica las siguientes tres propiedades:
> Si $K = M − 1$ entonces $M$ es primo
> Si $M$ es primo, entonces $K$ divide a $M − 1$.
> $K = M − 1$ si y solo si $a$ es raiz primitiva de $M$ y $M$ es primo.

Entonces el Teorema nos da pautas para encontrar generadores multiplicativos con
periodo maximo: determinar un numero primo $M$ y una raiz primitiva $a$ de $M$. Cuanto mayor sea $M$ mayor sera el periodo de la secuencia.

### El problema de los hiperplanos
Una de las desventajas de cualquier generador congruencial lineal, sea mixto o multiplicativo es que no se cumple tan satisfactoriamente la condicion (2) de la Definicion.
Para el caso de los generadores congruenciales lineales, ocurre lo siguiente. 
Si la secuencia producida es:
$$
y_0, y_1, y_2,\cdots , y_n \cdots $$
esta demostrado que los puntos $(y_j , y_{j+1}, \cdots , y_{j+k−1}), \; j = 0, 1, 2, \cdots$ estan ubicados en no mas de
$$
(k!M)^{1/k} = (k!)^{1/k} \; \sqrt[k]{M} $$
hiperplanos paralelos en $\mathbb{R}^k$. 
¿Que nos dice esto? Para un $k$ suficientemente grande, los puntos quedan ubicados en una cantidad finita de hiperplanos, y por lo tanto existen ”franjas” en las que no cae ninguna $k$-upla.

### Generadores congruenciales lineales combinados
Una forma de producir mayor aleatoriedad en una secuencia, y evitar la desventaja de los hiperplanos mencionada en la seccion anterior, es utilizar mas de un generador congruencial lineal y combinarlos entre ellos. Por combinar entendemos sumarlos o restarlos, y en general se recomienda la resta.

> **Theorem**
> Sean $W1, W2, \cdots , Wn$ variables aleatorias discretas independientes, tales que $W_1 \sim U(\{0, d − 1\})$ para cierto $d \geq 1$. Entonces
> $$
W = \left(\sum_{j=1}^{n} W_j \right) \; mod \; d $$
> es una variable aleatoria uniforme discreta en $\{0, d − 1\}$.

Con este resultado vemos que si en particular se suman dos o mas generadores congruenciales, tomando modulo uno de los modulos de ellos se obtiene un nuevo generador. ¿Cual es la ventaja de hacer esto? Recordemos que los generadores congruenciales tienen un determinado periodo. Si sumamos dos generadores con un mismo periodo K, entonces K sera el periodo de la suma. Pero si los periodos son diferentes, entonces la suma tiene un periodo mayor.

> **Theorem**
> Consideremos una familia de $N$ generadores, donde para cada $j$, $j = 1, 2, \cdots , N$, el generador $j$ tiene periodo $K_j$ y evoluciona de acuerdo a una ley:
> $$
y_{n,j} = f_j (y_{n−1,j} ), \quad n \geq 1, \quad y_0 = \text{semilla del generador } j $$
> Entonces el periodo $K$ de la secuencia
> $$
s_n = (y_{n,1}, y_{n,2}, \cdots , y_{n,N}), \quad n \geq 1 $$
> es igual al minimo comun multiplo de $K_1, K_2, \cdots , K_N$, es decir, $mcm(K_1, K_2, \cdots , K_N)$.

Asi, estos dos Teoremas constituyen la base teorica que nos permite obtener nuevos generadores congruenciales de variables aleatorias uniformes a partir de la suma o resta de dos o mas generadores. 
Ademas, con una buena eleccion de los periodos de los generadores se podra garantizar un periodo mucho mas largo para la combinacion.

### Otros generadores eficientes y portables
Existen otras formas de mejorar la eficiencia de los generadores construidos a partir de un generador congruencial, como son del tipo Fibonacci, resta con prestamo, suma con acarreo, y otros tantos.
Algunos generadores candidatos a ser combinados para obtener aun mejores generadores. son los siguientes:

| Modulo | Secuencia          | Periodo | 
|--------|--------------------|---------|
| $2^{32}$     | $x_n = 69069 x_{n−1} +$ impar| $2^{32}$ |
| $2^{32}$     | $x_n = x_{n−1} \cdot x_{n−2}$       | $2^{31}$ |
| $2^{32}$     | $x_n = x_{n−1} + x_{n−2} + C$   | $2^{58}$ |
|$2^{31} - 69$  | $x_n = x_{n−3} - x_{n−1}$       | $2^{62}$ |
| $2^{31} - 18$ | $x_n = x_{n−2} - x_{n−3} - C$   | $2^{95}$ |

---
aliases: 
tags: 
created_date: 2022-05-08
references: Notas Modelos y Simulacion 2022
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>
El **metodo de Monte Carlo** es un procedimiento general para seleccionar muestras aleatorias de una poblacion utilizando numeros aleatorios.
Este metodo se utiliza para calcular numericamente expresiones matematicamente complejas y dificiles de evaluar con exactitud, o que no pueden resolverse analiticamente. En nuestro caso analizaremos el calculo o estimacion de integrales definidas, y aproximaciones al valor de $\pi$.
El metodo de Monte Carlo se basa en dos resultados fundamentales de la Teoria de la Probabilidad:

1. La Ley Fuerte de los Grandes Numeros:  
   Si $X_1, X_2, \cdots , X_n, \cdots$ son variables aleatorias independientes, identicamente distribuidas, con media $\mu$, entonces:
   $$
   P \left( \lim_{n \to \infty} \frac{X_1 + X_2 + \cdots + X_n}{n} = \mu \right) = 1 
   $$
   o equivalentemente con probabilidad 1:
   $$
   \lim_{n \to \infty} \frac{X_1 + X_2 + \cdots + X_n}{n} = \mu
   $$
2. Si $X$ es una variable aleatoria absolutamente continua, con funcion de densidad $f$, y $g : \mathbb{R} \mapsto \mathbb{R}$ es una funcion, entonces  $g \circ X$ es una variable aleatoria y su valor esperado esta dado por:
   $$
   E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \; dx
   $$
COMPLETAR pag 59

## Estimacion de integrales definidas
### Integracion sobre $(0, 1)$
Una de las aplicaciones del metodo de Monte Carlo es facilitar el calculo de integrales definidas. En realidad no se determina el valor exacto, sino que se utiliza para **estimar** el valor de la integral principalmente en casos que el calculo analitico no es posible.
Veamos primero el caso en que se desee calcular el valor θ de una integral definida en el intervalo $[0, 1]$:
$$
\theta = \int_{0}^{1} g(x) \; dx
\tag{4.2}
$$
Si ahora consideramos una variable aleatoria uniforme $U$, $U ∼ \mathcal{U}(0, 1)$, entonces la funcion de densidad de $U$ es
$$
f(x) = I_{(0,1)}(x) = \left\{
\begin{array}{rll}
1 && 0 \lt x \lt 1 
\\
0 && \text{caso contrario}
\end{array}
\right.
$$
y por lo tanto $(4.2)$ se puede escribir como un valor esperado:

Ahora, por la Ley Fuerte de los grandes numeros podemos considerar una sucesion de $N$ variables aleatorias uniformes $U_i ∼ \mathcal{U}(0, 1)$, independientes, y aproximar el valor $\theta$ con el limite de promedios:
$$
\lim_{N \to \infty} \frac{g(U_1)+ g(U_2) + \cdots + g(u_N)}{N} = 
\lim_{N \to \infty} \frac{1}{N} \sum_{i=1}^{N} g(U_i) \simeq \theta
$$
En la practica, esta integral puede aproximarse con una muestra de tamaño $N$ suficientemente grande: $U_1 = u_1, U_2 = u_2, \cdots , U_N = u_N$ y estimar $\theta$ con:
$$
\theta = \frac{1}{N} \sum_{i=1}^{N} g(u_i)
$$
```python
from random import random
def g(u): #funcion a integrar en (0,1)
return #funcion g evaluada en u; Ex: (1 - u ** 2) ** (1.5)
def MonteCarlo(g, Nsim): 
Integral = 0 
for _ in range(Nsim): 
	Integral += g(random()) 
return Integral/Nsim
```

### Integracion sobre un intervalo $(a,b)$
Para estimar el valor de una integral definida, sobre un intervalo $(a, b)$, con $a$ y $b$ reales, se aplica un cambio de variables para transformarla en una integral entre 0 y 1. Esto es, si
$$
\theta = \int_{a}^{b} g(x) \; dx
$$
con $a \lt b$, entonces definimos la variable $y$:
$$
y = \frac{x - a}{b - a} \quad \quad \quad dy = \frac{1}{b-a} dx
$$
y asi el valor de $\theta$ puede calcularse como:
$$
\int_{a}^{b} g(x) \; dx =
\int_{0}^{1} g(a + (b - a) y) (b - a) \; dy =
\int_{0}^{1} h(y) \; dy
$$
donde
$$
h(y) = g(a + (b − a)y)(b − a), \quad \quad y \in (0, 1)
$$
### Integracion sobre $(0, \infty)$
En el caso de la estimacion de una integral en el intervalo $(0, \infty)$:
$$
\theta = \int_{0}^{\infty} g(x) \; dx
$$
tambien se aplica un cambio de variables, transformando biyectivamente el intervalo $(0, \infty$) en $(0, 1)$. 
Un cambio de variables posible es el siguiente:
$$
y = \frac{1}{x+1} \quad \quad \quad dy = - \frac{1}{(x+1)^2} dx = -y^2 \; dx
$$
Luego se tiene que:
$$
\int_{0}^{\infty} g(x) \; dx =
- \int_{1}^{0} \frac{g(\frac{1}{y} - 1)}{y^2} dy =
\int_{0}^{1} \frac{g(\frac{1}{y} - 1)}{y^2} dy =
\int_{0}^{1} h(x) \; dy
$$
donde
$$
h(y) = \frac{1}{y^2} g(\frac{1}{y} - 1)
$$
### Estimacion de integrales multiples
El metodo de Monte Carlo para el c alculo de integrales en una variable no es muy eficiente comparado con otros metodos numericos que convergen mas rapidamente al valor de la integral.
Sin embargo, para la estimacion de integrales multiples este metodo cobra mayor importancia ya que computacionalmente es menos costoso. 
Nuevamente, una integral multiple de una funcion en varias variables definida en un hipercubo de lado 1 puede estimarse con el metodo de Monte Carlo.
Para calcular la cantidad
$$
\theta = \int_{0}^{1} \cdots \int_{0}^{1} g(x_1, \cdots, x_l) \; dx_1 \cdots dx_l
$$
utilizamos el hecho que
$$
\theta = E[ g(U_1, \cdots U_l)]
$$
con $U_1, \cdots U_l$ independientes y uniformes en $(0, 1)$. Esto es asi porque su distribucion conjunta esta dada por:
$$
f(x_1, \cdots, x_l) = 
\mathbb{I}_{(0,1) \times \cdots \times (0,1)} (x_1, \cdots, x_l)
$$
y entonces
$$
\theta = \int_{-\infty}^{\infty} \cdots \int_{-\infty}^{\infty} g(x_1, \cdots, x_l) f(x_1, \cdots, x_l) \; dx_1 \cdots dx_l
$$
Si se tienen $N$ muestras independientes de estas $l$ variables,
$$
(U_1^1, \cdots, U_l^1), (U_1^2, \cdots, U_l^2), \cdots, (U_1^N, \cdots, U_l^N)
$$
podemos estimar el valor de $\theta$ como
$$
\theta \sim \frac{1}{N} \sum_{i=1}{N} g(U_1^i, \cdots, U_l^i)
$$

#### Estimacion del valor de $\pi$
Una aplicacion de Monte Carlo en su uso para la estimacion de integrales multiples, es el calculo estimado del valor de $\pi$. Recordemos que el area de un circulo de radio $r$ es $pi · r^2$. Si tomamos $r = 1$, entonces $\pi$ esta dado por el valor de una integral:
$$
\pi = \int_{-1}^{1} \int_{-1}^{1} \mathbb{I}_{\{x^2 + y^2 \lt 1\}} (x, y) \; dx \; dy
$$
Si $X$ e $Y$ son variables aleatorias indendientes, uniformes en $(−1, 1)$, ambas con densidad
$$
f_X(x) = f_Y(x) = 
\frac{1}{2} \cdot \mathbb{I}_{(-1,1)} (x)
$$
entonces su densidad conjunta es igual al producto de sus densidades:
$$
f(x,y) = f_X(x) = f_Y(y) = 
\frac{1}{4} \cdot \mathbb{I}_{(-1,1) \times (-1,1)} (x,y)
$$
En particular, $(X, Y)$ resulta un vector aleatorio con distribucion uniforme en $(−1, 1) \times (−1, 1)$, y tenemos que
$$
\pi = \int_{-1}^{1} \int_{-1}^{1} \mathbb{I}_{\{x^2 + y^2 \lt 1\}} (x, y) \; dx \; dy =
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} 4 \cdot \mathbb{I}_{\{x^2 + y^2 \lt 1\}} (x, y) \; f(x,y) \; dx \; dy
$$
Entonces $\frac{\pi}{4} = E[g(X, Y )]$ donde $g(x, y) = \mathbb{I}_{\{x^2 + y^2 \lt 1\}} (x, y)$. 
Asi, para estimar $\pi$ podemos generar secuencias de pares $(X_i , Y_i), \; i \geq 1$, donde $X_i$ e $Y_i$ son variables aleatorias uniformes en $(−1, 1)$, y luego estimar el valor de $\pi$ como:
$$
4 \cdot \frac{1}{N} \sum_{j=1}^{N} \mathbb{I}_{\{x^2 + y^2 \lt 1\}} (x_i, y_)
$$
En otras palabras, $\pi$ sera estimado por la proporcion de pares $(X, Y)$ que caigan dentro del circulo de radio 1, multiplicado por 4.
Notemos que si $U_1, U_2 \sim U(0, 1)$, entonces
$$
X = 2U_1 - 1 \quad \quad \quad Y = 2U_2 - 1
$$
verifican $X, Y \sim U(−1, 1)$.

```python
def valorPi(Nsim):
	enCirculo = 0.
	for _ in range(Nsim):
		u = 2 * random() -1
		v = 2 * random() - 1
		if u ** 2 + v ** 2 <= 1:
			enCirculo += 1
	return 4 * enCirculo/Nsim
```
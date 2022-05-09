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
Los [[Proceso de Poisson homogeneo|Procesos de Poisson homogeneos]] asumen que la tasa de arribos en distintos intervalos de tiempo solo depende de la longitud de ese periodo de tiempo. Por ejemplo, si se quisiera modelar el numero de llegadas de clientes a un banco se estaria suponiendo que en cualquier hora del dia la tasa de llegadas es la misma. Si en cambio se quiere tomar la hipotesis de que el promedio de llegadas varia en distintas horas del dia es conveniente introducir una funcion del tiempo para modelar la tasa de arribos.

> **Definicion**
> Un proceso N(t), t ≥ 0 es un proceso de Poisson no homogeneo con funcion de intensidad λ(t), t ≥ 0, si:
> 
> $N(0) = 0$
> 
> Para cada $n \geq 1$ y cada particion $0 < t_0 < t_1 < \cdots < t_n$ se tiene que $N(t_0), N(t_1)−N(t_0), \cdots , N(t_n) − N(t_{n−1})$ son variables aleatorias independientes.
> 
> $\lim_{h \to 0} \frac{P(N(t + h) − N(t) = 1)}{h} = \lambda(t)$
> 
>$\lim_{h \to 0} \frac{P(N(t + h) − N(t) \geq 2)}{h} = 0$

### Funcion valor medio del proceso
La funcion valor medio del proceso mide la intensidad media del numero de llegadas en un intervalo. Esta dada por:
$$
m(t) = \int_{0}^{t} \lambda (s) \; ds
$$
Notemos que en este caso los incrementos son independientes pero no estacionarios, ya que la distribucion de $N(t+s)−N(t)$ dependera de la funcion de intensidad $\lambda$ en el periodo $(t, t+s]$. Por otra parte si $\lambda(t) = \lambda$, constante, entonces $m(t) = \lambda \cdot t$ y es el caso del proceso de Poisson homogeneo.

En particular, se tiene que para cada $t \geq 0$ y $s \gt 0$, el numero de llegadas en el intervalo $(t, t + s]$ es una variable aleatoria Poisson con media $m(t, t + s) = m(t + s) − m(t)$:
$$
m(t, t + s) = m(t + s) − m(t) = \int_{t}^{t+s} \lambda(x) \; dx
$$
Es decir,
$$
P(N(t + s) − N(t) = j) = e^{−m(t,t+s)} \cdot \frac{(m(t, t + s))^j}{j!}
$$
> **Teorema**
> Sea $N(t)$ el numero de eventos ocurridos hasta el tiempo $t$ en un proceso de Poisson homogeneo con intensidad $\lambda$. Supongamos que en tiempo $t$ un evento es contado con probabilidad $p(t)$, independientemente de lo ocurrido hasta ese instante. Entonces el proceso de conteo de estos eventos $M(t)$ es un proceso de Poisson no homogeneo con intensidad $\lambda(t) = \lambda \cdot p(t)$.

Para comprobar que cumple las propiedades de un proceso de Poisson no homogeneo, notemos que $M(0) = 0$ ya que $N(0) = 0$. Los incrementos son independientes por ser una propiedad de $N(t)$ y porque $p(t)$ es independiente de lo ocurrido hasta el tiempo $t$. Si $(t, t + h)$ es un intervalo de tiempo pequeño, entonces: 
$$
P(M(t+h)−M(t) = 1) = P(N(t+h)−N(t) = 1 \text{ y este evento sea contado}) \simeq (\lambda h) \cdot p(t)
$$
Por ultimo, la probabilidad de que ocurran dos o mas eventos en un periodo de amplitud $h$ tiende a 0 para un $h$ pequeño ya que tambien es una propiedad del proceso $N(t)$.
En particular, si $N(t)$ es un proceso de Poisson no homogeneo con funcion de intensidad $\lambda(t)$ y $\lambda \in \mathbb{R}$ es una constante tal que
$$
\lambda(t) \leq \lambda
$$
para todo $t$, entonces $N(t)$ puede verse como el proceso de contar eventos de un proceso de Poisson homogeneo con intensidad $\lambda$ donde los eventos son contados con probabilidad
$$
p(t) = \frac{\lambda(t)}{\lambda}
$$
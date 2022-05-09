---
aliases: [Procesos de Poisson homogeneos]
tags: working
created_date: 2022-05-04
references: Notas Modelos y Simulacion 2022
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>
> **Definicion**
> Un [[proceso estocastico]] continuo $\{N(t), t \geq 0\}$ es un **proceso de Poisson homogeneo** de intensidad  $\lambda$, para un $\lambda \gt 0$, si cumple las siguientes propiedades:
> 
> $N(0) = 0$
> 
> Para cada $n \geq 1$ y cada particion $0 \leq t_0 \lt t_1 \lt \cdots \lt t_n$ se tiene que $N(t0), N(t_1)−N(t_0), \cdots , N(t_n) − N(t_{n−1})$ son variables aleatorias independientes. 
> 
> Para cada $t \geq 0, s \gt 0$, se cumple que la distribucion de $N(t + s) − N(t)$ y $N(s)$ estan igualmente distribuidas.
>
> $\lim_{h \to 0} \frac{P(N(h) = 1)}{h} = \lambda$
> 
> $\lim_{h \to 0} \frac{P(N(h) \geq 2)}{h} = 0$

Un proceso de Poisson puede pensarse como el proceso de contar el numero de arribos o  llegadas ocurridos hasta el tiempo $t$, sabiendo que la tasa de llegada por unidad de tiempo es $\lambda$. Con esta analogia, las propiedades anteriores significan, de manera intuitiva, que:

* Al momento $t = 0$ no se contabiliza ningun arribo.
* **Incrementos independientes**: Si se consideran dos o mas intervalos de tiempo no solapados entre si, el numero de arribos que ocurre en uno y otro intervalo son variables aleatorias independientes.
* **Incrementos estacionarios**: La distribucion del numero de llegadas que ocurre en un periodo de tiempo depende solo del tiempo transcurrido y no de la ubicacion en el tiempo de este periodo. Esta propiedad es la que determina que el proceso sea homogeneo
* Las ultimas dos propiedades indican que en un intervalo peque no de tiempo la probabilidad que ocurra ocurra una llegada es proporcional a la longitud del intervalo, con constante de **intensidad** igual a la tasa de arribos $\lambda$. Ademas la probabilidad de que lleguen dos o mas, simultaneamente, tiende a ser nula cuando el intervalo de tiempo es reducido.

### Distribucion del numero de llegadas $N(t)$
Para cada $t$, la variable aleatoria $N(t)$ tiene una distribucion de Poisson con media $\lambda t$. Una forma intuitiva de ver esta propiedad del proceso de Poisson es la siguiente.
Consideremos un intervalo de longitud $t \gt 0$, subdividido en $n$ intervalos de longitud $\frac{t}{n}$. 
$$
t_0 = 0 \lt t_1 \lt t_2 \lt \cdots \lt t_n = t, t_i = \frac{i}{n} t 
$$
Dado que el proceso de Poisson tiene incrementos independientes y para un n suficientemente grande la probabilidad de que ocurra mas de un evento es nula, el numero de llegadas en un subintervalo $(t_{i−1}, t_i ]$ es una Bernoulli con $p_n = \frac{\lambda t}{n}$:
$P(N(t_i) − N(t_{i−1}) = 1) \simeq \lambda \frac{t}{n}$
Asi, el numero de llegadas en el intervalo $[0, t]$ es una suma de $n$ variables aleatorias Bernoulli independientes con el mismo parametro $p_n$, y por lo tanto $N(t)$ se aproxima a una variable aleatoria con distribucion binomial $B(n, \frac{\lambda t}{n})$. 
Ahora bien, para $n$ grande y con $n \cdot p_n$ tendiendo a una constante (en este caso $\lambda$), estas binomiales convergen a una distribucion de Poisson con parametro $n \cdot \frac{\lambda t}{n} = \lambda \cdot t$
Por ultimo, vemos que por la condicion de estacionariedad la variable $N(t+s)−N(t)$ tiene distribucion de Poisson con media $\lambda s$.

### Proceso de Poisson homogeneo trasladado
Dado un proceso de Poisson homogeneo $N(t), t \geq 0$, con parametro $\lambda$, podemos considerar el proceso de eventos desde un valor fijo $t_0 \gt 0$. Esto es, el proceso
$$
Ñ(t) = N(t + t_0) − N(t_0), \quad t \geq 0.
$$
El proceso $N˜(t)$ es el proceso $N(t)$ con su origen trasladado a $t_0$. Notemos que $Ñ(t)$ verifica $Ñ(0) = N(t_0) − N(t_0) = 0$. Ademas hereda de $N(t)$ la propiedad de tener incrementos estacionarios e independientes como asi tambien se verifica que la tasa de arribos es $\lambda$. Luego $Ñ(t)$ es un proceso de Poisson homogeneo con tasa de llegada $\lambda$.

### Distribucion del tiempo entre arribos

### Distribucion del tiempo de arribo 

### Superposicion de procesos de Poisson homogeneos 

### Refinamiento de procesos de Poisson homogeneos 

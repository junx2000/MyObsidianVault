---
aliases: 
tags: 
created_date: 2022-05-06
references: Guia 5 - Lenguajes Formales y Computabilidad
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>
Un conjunto $\Sigma$-mixto $S\subseteq \omega ^{n}\times \Sigma ^{\ast m}$ es llamado **$\Sigma$-recursivo primitivo** si su funcion caracteristica $\chi _{S}^{\omega ^{n}\times \Sigma ^{\ast m}}$ es $\Sigma$-p.r. 
 
Notese que $\chi _{S}^{\omega ^{n}\times \Sigma^{\ast m}}=\lambda \vec{x}\vec{\alpha}[(\vec{x},\vec{\alpha})\in S]$.

**[[Conjuntos Sigma-recursivos primitivos - Lemma 15|Lemma 15]]**

El siguiente lema caracteriza cuando un conjunto rectangular es $\Sigma$-p.r.

**[[Conjuntos Sigma-recursivos primitivos - Lemma 16|Lemma 16]]**

Dada una funcion $f$ y un conjunto $S\subseteq D_{f}$, usaremos $f|_{S}$ para denotar la **restriccion** de $f$ al conjunto $S$, i.e. $f|_{S}=f\cap (S\times I_{f})$. 

Notese que $f|_{S}$ es la funcion dada por
$$
\begin{eqnarray*}
D_{f|_{S}} &=&S \\
f|_{S}(e) &=&f(e)\text{, para cada }e\in S
\end{eqnarray*}
$$
Notese que cualesquiera sea la funcion $f$ tenemos que $f|_{\emptyset} = \emptyset$ y $f|_{D_{f}}=f$.

**[[Conjuntos Sigma-recursivos primitivos - Lemma 17|Lemma 17]]**

Usando el lema anterior en combinacion con el Lemma 14 podemos ver que muchos predicados usuales son $\Sigma$-p.r. 
Por ejemplo sea
$$
P = \lambda x\alpha \beta \gamma \left[ x = \left\vert \gamma \right\vert \wedge \alpha = \gamma^{Pred(\left\vert \beta \right\vert )}\right]
$$
Notese que
$$
D_{P}=\omega \times \Sigma ^{\ast }\times (\Sigma ^{\ast }-\{\varepsilon \})\times \Sigma ^{\ast }
$$
Ademas $D_{P}$ es $\Sigma$-p.r. ya que
$$
\chi_{D_{P}}^{\omega \times \Sigma ^{\ast 3}}=\lnot \lambda \alpha \beta \left[ \alpha = \beta \right] \circ \left[ p_{3}^{1,3},C_{\varepsilon }^{1,3} \right]
$$
Tambien note que los predicados
$$
\begin{eqnarray*}
P_{1} &=& 
\lambda x\alpha \beta \gamma \left[ x=\left\vert \gamma \right\vert \right] 
\\
P_{2} &=&
\lambda x\alpha \beta \gamma \left[ \alpha = \gamma^{Pred(\left\vert \beta \right\vert )}\right]
\end{eqnarray*}
$$
son $\Sigma$-p.r. ya que pueden obtenerse componiendo funciones $\Sigma$-p.r. Un error seria pensar que $P=(P_{1}\wedge P_{2})$ ya que $P_{1}$ y $P_{2}$ tienen dominios distintos por lo cual no esta definido $(P_{1}\wedge P_{2})$. Sin embargo, tenemos que $P=(P_{1}|_{D_{P}}\wedge P_{2})$, lo cual
nos dice que $P$ es $\Sigma$-p.r. ya que $P_{1}|_{D_{P}}$ es $\Sigma$-p.r. por el Lema 17 y por lo tanto podemos aplicar el Lema 14

Aceptaremos sin prueba el siguiente resultado.

**[[Conjuntos Sigma-recursivos primitivos - Lemma 18|Lemma 18]]**

Ahora podemos probar una proposicion muy importante

**[[Conjuntos Sigma-recursivos primitivos - Proposition|Proposition]]**


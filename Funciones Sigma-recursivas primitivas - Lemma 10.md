---
aliases: 
tags:
  - theorem
references: Pag 15 - Guia 5 - Lenguajes Formales y Computabilidad
---
Created: <% tp.date.now() %>
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Supongamos $\Sigma$ es un alfabeto finito.
(a) $\lambda \alpha \beta \left[ \alpha \beta \right] \in \mathrm{PR}^{\Sigma }$
(b) $\lambda \alpha \left[ \left\vert \alpha \right\vert \right] \in \mathrm{PR}^{\Sigma }$

---
## Proof
(a) Ya que
$$
\begin{eqnarray*}
\lambda \alpha \beta \left[ \alpha \beta \right] (\alpha _{1},\varepsilon )
& = & \alpha _{1} = p_{1}^{0,1}(\alpha _{1}) 
\\
\lambda \alpha \beta \left[ \alpha \beta \right] (\alpha _{1},\alpha a)
& = & d_{a}(\lambda \alpha \beta \left[ \alpha \beta \right] (\alpha_{1},\alpha )), a \in \Sigma
\end{eqnarray*}
$$
tenemos que $\lambda \alpha \beta \left[ \alpha \beta \right] =R\left(p_{1}^{0,1},\mathcal{G}\right)$, donde $\mathcal{G}_{a}=d_{a}\circ p_{3}^{0,3}$, para cada $a\in \Sigma$.

(b) Ya que
$$
\begin{eqnarray*}
\lambda \alpha \left[ \left\vert \alpha \right\vert \right] (\varepsilon )
&=& 0 = C_{0}^{0,0}(\Diamond ) 
\\
\lambda \alpha \left[ \left\vert \alpha \right\vert \right] (\alpha a)
&=& \lambda \alpha \left[ \left\vert \alpha \right\vert \right] (\alpha ) + 1
\end{eqnarray*}
$$
tenemos que $\lambda \alpha \left[ \left\vert \alpha \right\vert \right] = R\left( C_{0}^{0,0},\mathcal{G}\right)$, donde $\mathcal{G}_{a} = Suc\circ p_{1}^{1,1}$, para cada $a\in \Sigma .$
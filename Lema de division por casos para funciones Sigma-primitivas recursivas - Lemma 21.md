---
aliases:
tags: 
  - theorem
created_date: 2022-05-06
references: Guia 5 - Lenguajes Formales y Computabilidad
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
$\lambda i\alpha \left[ \lbrack \alpha ]_{i}\right]$ es $\Sigma$-p.r.

---
## Proof
Supongamos $\Sigma =\{@,!\}$. Note que
$$
\begin{eqnarray*}
\lbrack \varepsilon ]_{i} &=&\varepsilon 
\\
\lbrack \alpha @]_{i} &=& 
\left\{ 
\begin{array}{lll}
\lbrack \alpha ]_{i} &  & \text{si }i\neq \left\vert \alpha \right\vert +1
\\ 
@ &  & \text{si }i=\left\vert \alpha \right\vert +1%
\end{array}
\right. 
\\
\lbrack \alpha !]_{i} &=&\left\{ 
\begin{array}{lll}
\lbrack \alpha ]_{i} &  & \text{si }i\neq \left\vert \alpha \right\vert +1
\\ 
! &  & \text{si }i=\left\vert \alpha \right\vert +1%
\end{array}
\right.
\end{eqnarray*}
$$
lo cual dice que $\lambda i\alpha \left[ \lbrack \alpha ]_{i}\right] =R\left( C_{\varepsilon }^{1,0},\mathcal{G}\right)$, donde $\mathcal{G} _{a}:\omega \times \Sigma ^{\ast }\times \Sigma ^{\ast }\rightarrow \Sigma^{\ast }$ es dada por
$$
\mathcal{G}_{a}(i,\alpha ,\zeta )=\left\{ 
\begin{array}{lll}
\zeta &  & \text{si }i\neq \left\vert \alpha \right\vert +1 
\\ 
a &  & \text{si }i=\left\vert \alpha \right\vert +1%
\end{array}
\right.
$$
para cada $a\in \Sigma$. O sea que solo resta probar que cada $\mathcal{G}_{a}$ es $\Sigma$-p.r.. Veamos que $\mathcal{G}_{@}$ es $\Sigma$-p.r.
Primero note que los conjuntos
$$
\begin{eqnarray*}
S_{1} &=&\left\{ (i,\alpha ,\zeta )\in \omega \times \Sigma^{\ast }\times \Sigma ^{\ast }:i\neq \left\vert \alpha \right\vert +1\right\} \\
S_{2} &=&\left\{ (i,\alpha ,\zeta )\in \omega \times \Sigma^{\ast } \times \Sigma ^{\ast }:i=\left\vert \alpha \right\vert + 1\right\}
\end{eqnarray*}
$$
son $\Sigma$-p.r. ya que
$$
\begin{eqnarray*}
\chi _{S_{1}}^{\omega \times \Sigma ^{\ast }\times \Sigma^{\ast }} &=&
\lambda xy\left[ x\neq y\right] \circ 
\left[ p_{1}^{1,2},Suc \circ \lambda \alpha \left[ \left\vert \alpha \right\vert \right] \circ p_{2}^{1,2}\right]
\\
\chi _{S_{2}}^{\omega \times \Sigma ^{\ast }\times \Sigma^{\ast }} &=&
\lambda xy\left[ x=y\right] \circ 
\left[ p_{1}^{1,2},Suc\circ \lambda \alpha \left[ \left\vert \alpha \right\vert \right] \circ p_{2}^{1,2}\right]
\end{eqnarray*}
$$
Notese que por el Lemma 17 tenemos que $p_{3}^{1,2}|_{S_{1}}$ y $C_{@}^{1,2}|_{S_{2}}$ son $\Sigma$-p.r.. Ademas
$$
\mathcal{G}_{@}=p_{3}^{1,2}|_{S_{1}}\cup C_{@}^{1,2}|_{S_{2}}
$$
por lo cual el Lemma 20 nos dice que $\mathcal{G}_{@}$ es $\Sigma$-p.r. 
Analogamente se prueba que $\mathcal{G}_{!}$ es $\Sigma$-p.r.

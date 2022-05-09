---
aliases: 
tags: 
references: 
  - Guia 1 = Lenguajes Formales y Computabilidad
  - Guia 5 = Lenguajes Formales y Computabilidad
---

Links: 
Created: 2022-04-26
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
Dados predicados $P:S\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow \{0,1\}$ y $Q:S\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow \{0,1\}$, con el mismo dominio, definamos nuevos predicados $(P\vee Q)$, $(P\wedge Q)$ y $\lnot P$ de la siguiente manera:

$$
\begin{equation*}
\begin{array}{rll}
(P\vee Q):S & \rightarrow & \omega \\
(\vec{x},\vec{\alpha}) & \rightarrow & \left\{
\begin{array}{lll}
1 &  & \text{si }P(\vec{x},\vec{\alpha})=1\text{ o }Q(\vec{x},\vec{\alpha})=1
\\
0 &  & \text{caso contrario}%
\end{array}%
\right.%
\end{array}%
\end{equation*}%
$$
$$
\begin{array}{rll}
(P\wedge Q):S & \rightarrow & \omega \\
(\vec{x},\vec{\alpha}) & \rightarrow & \left\{
\begin{array}{lll}
1 &  & \text{si }P(\vec{x},\vec{\alpha})=1\text{ y }Q(\vec{x},\vec{\alpha})=1
\\
0 &  & \text{caso contrario}
\end{array}
\right.
\end{array}
$$
$$
\begin{equation*}
\begin{array}{rll}
\lnot P:S & \rightarrow & \omega \\
(\vec{x},\vec{\alpha}) & \rightarrow & \left\{
\begin{array}{lll}
1 &  & \text{si }P(\vec{x},\vec{\alpha})=0 \\
0 &  & \text{si }P(\vec{x},\vec{\alpha})=1
\end{array}
\right.
\end{array}
\end{equation*}
$$
**[[Operaciones logicas entre predicados - Lemma 14|Lemma 14]]** 

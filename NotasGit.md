# NOTAS DE GIT
En Git, hay varios comandos que te permiten volver a commits anteriores, dependiendo de **lo que quieras hacer exactamente** (ver, moverte temporalmente, deshacer cambios, etc.). Aquí te resumo los comandos principales:

---

### 🔍 1. **Ver el historial de commits**

```bash
git log
```

Muestra una lista de commits con su hash, autor, fecha y mensaje.

---

### 🚶‍♂️ 2. **Moverte temporalmente a un commit (modo "detached HEAD")**

```bash
git checkout <hash_commit>
```

Esto no cambia el historial, solo te pone en ese punto. Es útil para inspeccionar.

> ⚠️ Estás fuera de una rama; si haces cambios, crea una nueva rama con `git checkout -b nueva-rama`.

---

### ↩️ 3. **Volver a un commit anterior y DESCARTAR los cambios posteriores (cuidado)**

```bash
git reset --hard <hash_commit>
```

* **`--hard`** borra todos los cambios después de ese commit, incluyendo del *working directory*.
* ⚠️ Si ya hiciste *push*, esto puede causar problemas al compartir con otros.

---

### 🔙 4. **Volver a un commit anterior, pero dejando los cambios como archivos modificados**

```bash
git reset --soft <hash_commit>
```

* Deja los archivos en el *staging area* (como listos para hacer *commit* de nuevo).

---

### 👣 5. **Crear una nueva rama desde un commit anterior (sin afectar la rama actual)**

```bash
git checkout -b nueva-rama <hash_commit>
```

---

### 🕵️‍♂️ 6. **Ver diferencias entre commits**

```bash
git diff <commit1> <commit2>
```

---

### 🧽 7. **Deshacer un commit (sin borrar historial)**

```bash
git revert <hash_commit>
```

* Crea un nuevo commit que revierte los cambios del commit anterior.
* Es la forma "segura" de deshacer algo que ya está en remoto.

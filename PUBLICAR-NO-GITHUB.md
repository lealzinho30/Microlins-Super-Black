# 🚀 Como Publicar no GitHub - Passo a Passo

## ✅ O que já foi feito:
- ✅ Repositório Git inicializado
- ✅ Todos os arquivos commitados
- ✅ Projeto pronto para push

---

## 📋 Próximos Passos:

### 1️⃣ **Criar Repositório no GitHub**

1. Acesse: **https://github.com**
2. Faça **login** na sua conta
3. Clique no **botão "+"** (canto superior direito)
4. Selecione **"New repository"**
5. Preencha:
   - **Repository name:** `microlins-super-black` (ou outro nome)
   - **Description:** `Landing Page SUPER BLACK MICROLINS - 87% OFF`
   - **Visibility:** Escolha **Public** ou **Private**
   - ⚠️ **NÃO marque** "Add a README file" (já temos)
   - ⚠️ **NÃO marque** "Add .gitignore" (já temos)
6. Clique em **"Create repository"**

---

### 2️⃣ **Conectar e Fazer Push**

Depois de criar o repositório, o GitHub vai mostrar comandos. Use estes:

**Copie e cole no terminal (PowerShell):**

```bash
git remote add origin https://github.com/SEU-USUARIO/microlins-super-black.git
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

---

## 🎯 **Exemplo Completo:**

Se seu usuário for `joaosilva`, os comandos seriam:

```bash
git remote add origin https://github.com/joaosilva/microlins-super-black.git
git branch -M main
git push -u origin main
```

---

## 🔐 **Se pedir login:**

- **Username:** Seu usuário do GitHub
- **Password:** Use um **Personal Access Token** (não sua senha normal)

**Como criar Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Marque: `repo` (todas as opções)
4. Copie o token gerado
5. Use como senha

---

## ✅ **Depois do Push:**

Seu código estará em:
**`https://github.com/SEU-USUARIO/microlins-super-black`**

---

## 🚀 **Bônus: Deploy Automático no GitHub Pages**

Depois de fazer push, você pode ativar GitHub Pages:

1. Vá em **Settings** do repositório
2. Role até **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** main / **Folder:** `/build`
5. **Save**
6. Seu site ficará em: `https://SEU-USUARIO.github.io/microlins-super-black`

---

## 💡 **Dica:**

Se preferir, posso executar os comandos de push para você! 
Só me diga o link do repositório que você criou no GitHub.

---

## 🆘 **Precisa de Ajuda?**

Se tiver qualquer dúvida, me avise! 🚀


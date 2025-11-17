# Guia de Personalização do Site - Lucas Leal

Este guia vai te ajudar a personalizar o site com suas informações reais.

## 🔧 Informações para Atualizar

### 1. Dados de Contato (PRIORIDADE ALTA)

**WhatsApp**: Substitua `SEUNUMERO` pelo seu número completo com DDI.

Arquivos para editar:
- `src/components/Hero.js` (linha 51 e 66)
- `src/components/Process.js` (linha 92)
- `src/components/TargetAudience.js` (linha 79)
- `src/components/FinalCTA.js` (linha 82)
- `src/components/Footer.js` (linha 75)
- `src/components/Skills.js` (linha 111)

**Formato correto**: `https://wa.me/5511999999999`
- Exemplo: se seu número é (11) 98765-4321
- Use: `https://wa.me/5511987654321`

---

### 2. Redes Sociais

**Instagram**: Já está configurado como `@lucasleal.mkt`

Se precisar alterar, edite:
- `src/components/Hero.js` (linha 66)
- `src/components/Footer.js` (linha 84)

**Email**: Configure seu email real em:
- `src/components/Footer.js` (linha 93)
- Substitua `contato@lucasleal.com` pelo seu email

---

### 3. Informações Pessoais/Profissionais

#### Estatísticas no Hero (`src/components/Hero.js` linhas 81-93)
Atualize conforme sua realidade:
- Anos atuando
- Empresas atendidas
- Métricas de satisfação

#### Sobre Mim (`src/components/About.js`)
Personalize:
- Linha 26-42: Sua biografia e trajetória
- Linha 60-93: Experiência profissional e formação
- Linha 100-107: Citação pessoal

#### Habilidades (`src/components/Skills.js`)
Ajuste as habilidades e níveis conforme seu domínio:
- Linha 5-30: Categorias e ferramentas que você domina
- Níveis de 0 a 100

---

### 4. Cases/Conquistas (`src/components/Achievements.js`)

Você já tem 3 cases configurados:
- Microlins Heliópolis
- Marketing Bag Sacomã
- Miss Fit Suplementos

**Se tiver mais cases**, adicione seguindo o padrão:
```javascript
{
  company: "Nome da Empresa",
  description: "Descrição do trabalho realizado",
  result: "Resultado alcançado",
  category: "Categoria",
  metric: "Métrica",
  color: "from-accent to-accent-dark" // ou purple, electric
}
```

---

### 5. Serviços (`src/components/Services.js`)

Os serviços principais já estão configurados. Se quiser ajustar:
- Descrições (linhas 7, 23, 39)
- Features (linhas 8-13, 24-29, 40-45)

---

### 6. Público-Alvo (`src/components/TargetAudience.js`)

Lista atual está em linha 5-12. Adicione ou remova itens conforme seu público real.

---

### 7. Meta Tags SEO (`public/index.html`)

Atualize para melhorar SEO:
- Linha 9-11: Descrição e keywords
- Linha 14-19: Open Graph para redes sociais
- Linha 22-26: Twitter cards

---

## 🎨 Personalização de Cores

Se quiser mudar as cores do site, edite `tailwind.config.js`:

```javascript
colors: {
  'accent': '#FF3366',        // Cor principal (vermelho)
  'purple': '#9333EA',         // Roxo
  'electric': '#00F0FF',       // Azul elétrico
}
```

---

## 📸 Adicionar Imagens

### Logo/Foto Pessoal
Adicione em `public/`:
- `logo192.png` (192x192px)
- `logo512.png` (512x512px)
- `favicon.ico`
- `og-image.jpg` (1200x630px para redes sociais)

### Imagens de Projetos
Crie uma pasta `src/assets/images/` e adicione fotos dos seus projetos.

---

## ✅ Checklist Pré-Lançamento

- [ ] Substituir todos os `SEUNUMERO` pelo WhatsApp real
- [ ] Atualizar email de contato
- [ ] Verificar links do Instagram
- [ ] Revisar biografia e experiência
- [ ] Ajustar cases com dados reais
- [ ] Atualizar estatísticas do Hero
- [ ] Adicionar imagens/fotos
- [ ] Testar todos os links
- [ ] Testar responsividade no mobile
- [ ] Configurar Google Analytics (opcional)

---

## 🚀 Deploy

Quando estiver pronto para colocar online:

```bash
npm run build
```

Isso vai gerar uma pasta `build/` otimizada para produção.

### Opções de Hospedagem Gratuita:
- **Vercel**: vercel.com (recomendado)
- **Netlify**: netlify.com
- **GitHub Pages**: pages.github.com

---

## 💡 Dicas

1. **Teste no mobile primeiro**: A maioria dos seus clientes vai acessar pelo celular
2. **Mantenha atualizados os cases**: Sempre mostre seus trabalhos mais recentes
3. **Responda rápido no WhatsApp**: Primeira impressão é tudo
4. **Use Analytics**: Entenda de onde vem seu tráfego

---

## 📞 Precisando de Ajuda?

Se tiver dúvidas sobre como personalizar algo específico, consulte a documentação do React:
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com

---

**Boa sorte com seu novo site! 🚀**


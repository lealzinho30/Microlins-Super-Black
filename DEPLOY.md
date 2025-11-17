# Guia de Deploy - Landing Page Lucas Leal

## 🚀 Preparação para Deploy

### 1. Checklist Pré-Deploy

- [ ] **WhatsApp**: Substituir `SEUNUMERO` em todos os arquivos
- [ ] **Email**: Atualizar email de contato no Footer
- [ ] **Instagram**: Verificar @ correto
- [ ] **Textos**: Revisar toda a cópia
- [ ] **Imagens**: Adicionar fotos reais dos projetos
- [ ] **Favicon**: Adicionar favicon.ico na pasta `public/`
- [ ] **OG Image**: Criar imagem 1200x630px para redes sociais
- [ ] **Testes**: Testar todos os links e navegação
- [ ] **Mobile**: Testar em dispositivos móveis reais
- [ ] **Performance**: Executar build e verificar tamanho

### 2. Build de Produção

```bash
# Testar build localmente
npm run build

# O build vai gerar uma pasta 'build/' otimizada
```

### 3. Teste Local do Build

```bash
# Instalar servidor estático
npm install -g serve

# Servir o build localmente
serve -s build

# Acesse http://localhost:3000 e teste tudo
```

---

## 🌐 Opções de Hospedagem

### Opção 1: Vercel (Recomendado) ⭐

**Vantagens**:
- Deploy automático do GitHub
- SSL gratuito
- CDN global
- Preview deployments
- Domínio gratuito .vercel.app

**Passos**:

1. Crie conta em [vercel.com](https://vercel.com)
2. Instale Vercel CLI (opcional):
```bash
npm i -g vercel
```

3. Deploy via CLI:
```bash
vercel
```

4. Ou conecte seu repositório GitHub:
   - Importe projeto do GitHub
   - Vercel detecta React automaticamente
   - Deploy automático a cada push

**Domínio Personalizado**:
- Em Project Settings > Domains
- Adicione seu domínio
- Configure DNS conforme instruções

---

### Opção 2: Netlify

**Vantagens**:
- Interface muito simples
- Forms nativos
- Functions serverless
- SSL gratuito

**Passos**:

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `build/` no dashboard
3. Ou conecte com GitHub para deploy automático

**Netlify CLI**:
```bash
npm install netlify-cli -g
netlify deploy --prod --dir=build
```

---

### Opção 3: GitHub Pages

**Vantagens**:
- Gratuito para repositórios públicos
- Integrado ao GitHub

**Passos**:

1. Instale gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "homepage": "https://seugithub.github.io/seu-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

---

### Opção 4: Firebase Hosting

**Vantagens**:
- Infraestrutura do Google
- Analytics integrado
- SSL gratuito

**Passos**:

1. Instale Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login e init:
```bash
firebase login
firebase init hosting
```

3. Configure:
   - Public directory: `build`
   - Single-page app: `Yes`
   - Automatic builds: `No`

4. Deploy:
```bash
npm run build
firebase deploy
```

---

## 🎯 Configuração de Domínio Próprio

### Registrar Domínio

**Recomendações**:
- [Registro.br](https://registro.br) (domínios .br)
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)

### Configurar DNS

Para Vercel/Netlify, adicione estes registros DNS:

```
A Record:
Host: @
Value: [IP fornecido pela plataforma]

CNAME:
Host: www
Value: [subdomínio fornecido]
```

**Tempo de propagação**: 24-48 horas (geralmente menos)

---

## 📊 Analytics e Tracking

### Google Analytics 4

1. Crie propriedade em [analytics.google.com](https://analytics.google.com)
2. Copie o ID de medição (G-XXXXXXXXXX)
3. Adicione no `public/index.html` antes do `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel (Facebook/Instagram)

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 🔒 Segurança

### Headers de Segurança (Netlify)

Crie `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
```

### Headers de Segurança (Vercel)

Crie `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

---

## ⚡ Performance

### Otimizações Implementadas

✅ Code splitting automático (React)
✅ Tree shaking (Webpack)
✅ Minificação de CSS/JS
✅ Lazy loading de imagens (implementar se adicionar fotos)
✅ Fonts otimizadas (Google Fonts com display=swap)

### Lighthouse Score Esperado

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 📱 Testes Recomendados

### Antes do Deploy

- [ ] Chrome DevTools (Mobile view)
- [ ] Firefox Responsive Design Mode
- [ ] Safari (se tiver Mac/iOS)
- [ ] Testar em dispositivo Android real
- [ ] Testar em dispositivo iOS real

### Ferramentas de Teste

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 🐛 Troubleshooting

### Build falha

```bash
# Limpar cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Erro 404 em rotas

Adicione `_redirects` (Netlify) ou `vercel.json` para SPA:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 📞 Suporte

Se tiver problemas:

1. Verifique os logs de build da plataforma
2. Consulte documentação oficial:
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
3. Teste localmente primeiro (`npm start` e `serve -s build`)

---

**Boa sorte com o lançamento! 🚀**


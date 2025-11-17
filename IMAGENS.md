# Guia de Imagens - Landing Page Lucas Leal

## 📸 Imagens Utilizadas

Este site usa imagens do **Unsplash**, um banco de imagens gratuito e de alta qualidade.

### Imagens Atuais por Seção

#### 1. Hero (Seção Principal)
- **Imagem**: Dashboard de analytics/marketing
- **URL**: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`
- **Contexto**: Marketing digital, dados, estratégia
- **Localização**: `src/components/Hero.js`

#### 2. Sobre (About)
- **Imagem**: Workspace profissional moderno
- **URL**: `https://images.unsplash.com/photo-1556761175-b413da4baf72`
- **Contexto**: Ambiente de trabalho, profissionalismo
- **Localização**: `src/components/About.js`

#### 3. Autoridade (Authority) - 3 Imagens

**Consultoria Estratégica:**
- **URL**: `https://images.unsplash.com/photo-1552664730-d307ca884978`
- **Contexto**: Trabalho em equipe, reunião

**Dados & Performance:**
- **URL**: `https://images.unsplash.com/photo-1543269865-cbf427effbad`
- **Contexto**: Análise de dados, métricas

**Crescimento Sustentável:**
- **URL**: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf`
- **Contexto**: Crescimento, sucesso empresarial

#### 4. Portfólio - 6 Imagens

**Landing Page Conversão:**
- **URL**: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`
- **Contexto**: Analytics, conversão

**Identidade Visual:**
- **URL**: `https://images.unsplash.com/photo-1561070791-2526d30994b5`
- **Contexto**: Design, branding, paleta de cores

**Campanha Meta Ads:**
- **URL**: `https://images.unsplash.com/photo-1557838923-2985c318be48`
- **Contexto**: Redes sociais, engajamento

**E-commerce Completo:**
- **URL**: `https://images.unsplash.com/photo-1472851294608-062f824d29cc`
- **Contexto**: Compras online, smartphone

**Automação WhatsApp:**
- **URL**: `https://images.unsplash.com/photo-1611746872915-64382b5c76da`
- **Contexto**: Smartphone, mensagens, comunicação

**Google Ads B2B:**
- **URL**: `https://images.unsplash.com/photo-1551288049-bebda4e38f71`
- **Contexto**: Dados, gráficos, performance

#### 5. Depoimentos - 3 Imagens

**Maria Silva (Mulher):**
- **URL**: `https://images.unsplash.com/photo-1494790108377-be9c29b29330`
- **Contexto**: Profissional feminina

**Carlos Mendes (Homem):**
- **URL**: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e`
- **Contexto**: Profissional masculino

**Ana Paula Costa (Mulher):**
- **URL**: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80`
- **Contexto**: Profissional feminina

---

## 🔄 Como Substituir por Suas Próprias Imagens

### Opção 1: Usar Suas Fotos Reais (Recomendado)

1. **Prepare suas imagens:**
   - Resolução recomendada: 1920x1080px ou maior
   - Formato: JPG ou WebP (melhor performance)
   - Otimize com [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)

2. **Adicione na pasta do projeto:**
   ```
   src/assets/images/
   ├── hero-image.jpg
   ├── about-workspace.jpg
   ├── projeto-1.jpg
   ├── projeto-2.jpg
   └── ...
   ```

3. **Importe no componente:**
   ```javascript
   import heroImage from '../assets/images/hero-image.jpg';
   
   // Depois use:
   <img src={heroImage} alt="Descrição" />
   ```

### Opção 2: Continuar com Unsplash

Se quiser trocar as imagens do Unsplash por outras:

1. Acesse [unsplash.com](https://unsplash.com)
2. Pesquise por: "marketing", "business", "workspace", "analytics"
3. Copie a URL da imagem (adicione `?w=800&q=80` no final para otimizar)
4. Substitua no código

**Exemplo:**
```javascript
<img 
  src="https://images.unsplash.com/photo-XXXXXXX?w=800&q=80" 
  alt="Descrição"
/>
```

---

## 📐 Tamanhos Recomendados

### Por Seção:

| Seção | Dimensões | Aspecto | Formato |
|-------|-----------|---------|---------|
| Hero | 800x800px | 1:1 | JPG/WebP |
| About | 800x600px | 4:3 | JPG |
| Authority | 600x400px | 3:2 | JPG |
| Portfolio | 800x600px | 4:3 | JPG/WebP |
| Depoimentos | 400x400px | 1:1 | JPG |

### Otimização:

- **Peso máximo**: 200KB por imagem
- **Formato ideal**: WebP (70% menor que JPG)
- **Lazy loading**: Já implementado automaticamente pelo navegador

---

## 🎨 Dicas de Fotografia

### Para Fotos Pessoais/Profissionais:

1. **Iluminação**: Natural, pela manhã ou final da tarde
2. **Fundo**: Limpo, desfocado (bokeh)
3. **Roupa**: Profissional mas autêntica
4. **Expressão**: Natural, sorriso genuíno

### Para Fotos de Projetos:

1. **Screenshots**: Alta resolução, sem elementos distrativos
2. **Mockups**: Use [Smartmockups](https://smartmockups.com/) ou [Mockup World](https://www.mockupworld.co/)
3. **Before/After**: Mostre o antes e depois quando possível

---

## 🔧 Ferramentas Úteis

### Edição e Otimização:

- [Canva](https://canva.com) - Editor online gratuito
- [Photopea](https://photopea.com) - Photoshop online grátis
- [TinyPNG](https://tinypng.com) - Compressão de imagens
- [Squoosh](https://squoosh.app) - Conversão WebP

### Bancos de Imagens Gratuitos:

- [Unsplash](https://unsplash.com) - Usado no projeto
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)
- [Freepik](https://freepik.com) - Vetores e ilustrações

### Mockups:

- [Smartmockups](https://smartmockups.com)
- [Mockup World](https://mockupworld.co)
- [Placeit](https://placeit.net)

---

## ⚡ Performance

### Lazy Loading

As imagens já usam lazy loading nativo:

```javascript
<img 
  src="url-da-imagem.jpg" 
  alt="Descrição"
  loading="lazy"  // Adicione isso
/>
```

### Formatos Modernos

Para melhor performance, use WebP:

```javascript
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Descrição" />
</picture>
```

---

## 📝 Checklist de Imagens

Antes de fazer deploy:

- [ ] Todas as imagens estão otimizadas (< 200KB)
- [ ] Textos alternativos (alt) descritivos em todas
- [ ] Fotos de projetos reais (se possível)
- [ ] Foto profissional sua (opcional mas recomendado)
- [ ] Testou carregamento em 3G/4G
- [ ] Verificou exibição em mobile

---

## 🎯 Prioridades

### Alta Prioridade (Trocar primeiro):
1. ✅ Hero - Sua foto ou logo profissional
2. ✅ About - Seu workspace ou foto profissional
3. ✅ Portfolio - Screenshots reais dos seus projetos

### Média Prioridade:
4. Authority - Podem manter as atuais
5. Depoimentos - Fotos reais de clientes (com permissão)

### Baixa Prioridade:
6. Demais seções - As imagens atuais funcionam bem

---

**Lembre-se**: Imagens reais sempre convertem mais que stock photos! 📸


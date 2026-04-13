# N7N Usinagem — Site Institucional

## Dados da Empresa (Receita Federal)

| Campo | Valor |
|-------|-------|
| Razão Social | N7N Usinagem e Montagem de Equipamentos Ltda |
| Nome Fantasia | N7N Usinagem e Montagem - EPP |
| CNPJ | 35.257.250/0001-96 |
| Situação | ATIVA |
| Fundação | 21/10/2019 |
| Porte | Empresa de Pequeno Porte (EPP) |
| Capital Social | R$ 100.000,00 |
| Sócio-Administrador | Izael Manoel do Nascimento |
| Endereço | Rua Roberto Koch, 764 — Vila Independência, São Paulo/SP — CEP 04.221-060 |
| Telefone | (11) 2272-2266 |
| E-mail (Receita) | tir-injetados@hotmail.com |
| Regime | Simples Nacional (desde 01/01/2024) |
| CNAE Principal | 25.43-8-00 — Fabricação de ferramentas |
| CNAEs Secundários | 25.32-2-01 — Produção de artefatos estampados de metal |
| | 25.39-0-01 — Serviços de usinagem, tornearia e solda |

> ⚠️ O e-mail acima veio da Receita Federal e pode estar desatualizado. Confirmar com o cliente.

---

## Spec do Site

### Visão Geral

| Campo | Valor |
|-------|-------|
| Tipo | Site institucional B2B — Indústria Metal-Mecânica |
| Objetivo | Gerar pedidos de orçamento de empresas industriais |
| Público-Alvo | Engenheiros, compradores e gerentes de manutenção em SP e Grande SP |
| Tom | Técnico, preciso, confiável, industrial |
| Brand Keywords | precisão, aço, usinagem, tornearia, solda, ferramentas, montagem, São Paulo |

### Design

| Campo | Valor |
|-------|-------|
| Cor primária | Azul aço escuro `#1A2E44` |
| Cor de destaque | Laranja industrial `#E8610A` |
| Cor neutra | Cinza metálico `#8A9BB0` |
| Fundo claro | `#F8F9FA` |
| Fonte headings | Rajdhani (600/700) |
| Fonte corpo | Source Sans Pro (300/400/600) |

### Estrutura de Seções

1. **Hero** — Headline impactante + CTA "Solicitar Orçamento" (laranja) + fundo escuro com textura metálica
2. **Serviços** — Cards: Usinagem CNC, Tornearia Convencional, Solda, Estampagem, Fabricação de Ferramentas, Montagem de Equipamentos
3. **Diferenciais** — Ícones em linha: localização SP, atendimento unitário/seriado, prazo, qualidade, orçamento sem compromisso
4. **Capacidade Técnica** — Materiais trabalhados, tolerâncias, parque de máquinas *(a confirmar com cliente)*
5. **Setores Atendidos** — Grid: Automotivo, Petroquímico, Bens de Capital, Alimentício, Construção Civil Industrial, Manutenção Industrial *(a confirmar com cliente)*
6. **Sobre Nós** — Fundada em 2019, Vila Independência/SP, sócio com experiência técnica
7. **Formulário de Orçamento** — Nome, Empresa, Telefone, E-mail, Descrição, Quantidade, Prazo, Upload de desenho técnico
8. **Rodapé** — Endereço completo, telefone, CNPJ, mapa Google, links rápidos

### Funcionalidades

- WhatsApp flutuante para contato rápido
- Upload de arquivo técnico (PDF/DWG) no formulário
- Mapa Google embarcado no rodapé
- Design responsivo mobile-first

> ⚠️ **Itens a confirmar com o cliente antes do site ir ao ar:**
> - Serviços reais oferecidos e descrições técnicas
> - Equipamentos / parque de máquinas disponível
> - Setores que realmente atendem
> - Fotos reais da oficina e das peças produzidas
> - E-mail e WhatsApp atualizados para contato
> - Se tem certificações (ISO, etc.)

---

## Estrutura do Projeto

```
n7n/
├── CLAUDE.md          ← este arquivo
├── index.html         ← site estático (uma página)
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── _headers           ← headers Cloudflare Pages
```

## Deploy

- **Repositório:** https://github.com/mrldias/n7n-usinagem
- **Hospedagem:** Cloudflare Pages — conta `marcosdias@transformahub.com.br`
- **URL do site:** https://n7n-usinagem.pages.dev
- **Branch de produção:** `master`
- **Comando de build:** *(nenhum — HTML estático)*
- **Diretório de saída:** `/` (raiz)
- **Deploy automático:** sim — qualquer `git push` na branch `master` publica em ~30s

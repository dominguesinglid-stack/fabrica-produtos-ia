"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  Clock,
  Code2,
  Copy,
  DollarSign,
  Factory,
  Filter,
  Gift,
  HelpCircle,
  Layers,
  Play,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  "Todos",
  "MVP",
  "Design",
  "Banco de dados",
  "Autenticação",
  "SEO",
  "Monetização",
  "Correções",
];

const prompts = [
  {
    title: "Transformar ideia em produto",
    category: "MVP",
    level: "Essencial",
    text: "Transforme minha ideia [descreva a ideia] em um produto digital completo. Crie proposta de valor, público-alvo, funcionalidades principais, telas necessárias, modelo de monetização e próximos passos para lançar rápido.",
  },
  {
    title: "Criar MVP com IA",
    category: "MVP",
    level: "Essencial",
    text: "Crie um MVP completo para [ideia] com página inicial, dashboard, fluxo principal e banco de dados. Antes de implementar, liste telas, funcionalidades e regras de negócio.",
  },
  {
    title: "Landing page que vende",
    category: "Monetização",
    level: "Growth",
    text: "Crie uma landing page de alta conversão para vender [produto]. Inclua headline forte, promessa clara, benefícios, prova social, bônus, garantia, FAQ e chamada para ação.",
  },
  {
    title: "Refatoração visual premium",
    category: "Design",
    level: "Visual",
    text: "Transforme esta interface em uma experiência premium, moderna e responsiva. Use hierarquia visual clara, espaçamento generoso, cards elegantes e microinterações.",
  },
  {
    title: "Criar banco de dados",
    category: "Banco de dados",
    level: "Técnico",
    text: "Modele o banco de dados para este app: [descrição]. Crie tabelas, campos, relacionamentos, regras de segurança e exemplos de dados.",
  },
  {
    title: "Login seguro com perfis",
    category: "Autenticação",
    level: "Técnico",
    text: "Adicione autenticação com login, cadastro, recuperação de senha e perfis de usuário. Proteja rotas privadas e crie mensagens de erro amigáveis.",
  },
  {
    title: "Checklist anti-bug",
    category: "Correções",
    level: "Debug",
    text: "Analise o app inteiro procurando bugs, problemas responsivos, estados vazios, erros de formulário e inconsistências visuais. Corrija por prioridade.",
  },
  {
    title: "SEO para produto digital",
    category: "SEO",
    level: "Growth",
    text: "Otimize esta página para SEO. Crie title, meta description, headings, copy escaneável e sugestões de palavras-chave para atrair compradores.",
  },
];

const receives = [
  [
    BookOpen,
    "Biblioteca com 100+ prompts",
    "Prompts prontos e testados para cada etapa da criação do seu produto.",
  ],
  [
    Layers,
    "8 categorias completas",
    "MVP, Design, Banco de dados, Autenticação, SEO, Monetização e Correções.",
  ],
  [
    Gift,
    "Frameworks e checklists",
    "Estruturas passo a passo para planejar, criar, lançar e escalar.",
  ],
  [
    Rocket,
    "Atualizações gratuitas",
    "Novos prompts e estratégias adicionados constantemente.",
  ],
  [
    DollarSign,
    "Estratégias de monetização",
    "Modelos de oferta, precificação, upsell, copy e muito mais.",
  ],
  [
    Users,
    "Suporte via comunidade",
    "Tire dúvidas e troque experiências com outros criadores.",
  ],
];

const bonuses = [
  ["💻", "Templates de Landing Pages", "Modelos prontos para copiar e adaptar.", "R$97"],
  ["✏️", "Scripts de Copy que Vendem", "Estruturas de copy testadas e validadas.", "R$97"],
  ["🏷️", "Modelos de Oferta Irresistível", "Ofertas prontas para diferentes nichos.", "R$97"],
  ["🚀", "Plano de Lançamento em 7 Dias", "Passo a passo para lançar seu produto.", "R$97"],
];

const testimonials = [
  [
    "Lucas Mendes",
    "Fundador de SaaS",
    "Os prompts me economizaram semanas de trabalho. Consegui lançar meu MVP em tempo recorde!",
  ],
  [
    "Juliana Castro",
    "Especialista em Marketing",
    "As estruturas de copy e landing pages aumentaram minhas conversões em mais de 3x.",
  ],
  [
    "Rafael Oliveira",
    "Empreendedor Digital",
    "Finalmente um material prático e direto ao ponto. Uso todos os dias no meu negócio.",
  ],
];

function PromptCard({ prompt }: { prompt: (typeof prompts)[number] }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <Card className="rounded-2xl border border-white/10 bg-[#111629] text-white shadow-xl">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-violet-500/20 px-2 py-1 text-[11px] text-violet-200">
                {prompt.category}
              </span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-slate-200">
                {prompt.level}
              </span>
            </div>
            <h3 className="text-lg font-black">{prompt.title}</h3>
          </div>

          <Button
            onClick={copyPrompt}
            variant="outline"
            size="icon"
            className="shrink-0 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <p className="text-sm leading-7 text-slate-300">{prompt.text}</p>
      </CardContent>
    </Card>
  );
}

function FactoryIllustration() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(168,85,247,.85),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,.55),transparent_32%)]" />

      <div className="absolute left-[18%] top-[52%] h-32 w-[70%] -translate-y-1/2 rotate-[-8deg] rounded-[2rem] border border-violet-300/30 bg-violet-950/80 shadow-[0_0_90px_rgba(168,85,247,.75)]" />

      <div className="absolute left-[24%] top-[42%] h-28 w-64 rounded-2xl border border-violet-300/40 bg-gradient-to-br from-violet-500 to-purple-950 shadow-2xl">
        <div className="absolute -top-14 left-12 h-16 w-12 rounded-t-2xl border border-violet-300/30 bg-gradient-to-b from-violet-300 to-violet-900" />

        <div className="absolute -top-10 left-28 h-12 w-20 bg-gradient-to-br from-violet-400 to-purple-900 [clip-path:polygon(0_100%,0_35%,30%_72%,52%_35%,100%_78%,100%_100%)]" />

        {[24, 72, 120, 168].map((x) => (
          <div
            key={x}
            className="absolute top-10 h-10 w-8 rounded-md bg-fuchsia-400/85 shadow-[0_0_26px_rgba(217,70,239,.9)]"
            style={{ left: x }}
          />
        ))}
      </div>

      <div className="absolute right-8 top-8 rounded-2xl border border-violet-300/30 bg-violet-500/30 p-4 shadow-[0_0_40px_rgba(168,85,247,.5)]">
        <Code2 className="h-7 w-7 text-white" />
      </div>

      <div className="absolute bottom-8 left-8 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-500/30 p-4 shadow-[0_0_40px_rgba(217,70,239,.5)]">
        <Factory className="h-7 w-7 text-white" />
      </div>

      <div className="absolute bottom-6 right-12 rounded-2xl border border-violet-300/30 bg-violet-500/30 p-4 shadow-[0_0_40px_rgba(168,85,247,.5)]">
        <Zap className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredPrompts = useMemo(
    () =>
      prompts.filter((prompt) => {
        const matchesCategory = category === "Todos" || prompt.category === category;
        const matchesQuery = `${prompt.title} ${prompt.text} ${prompt.category}`
          .toLowerCase()
          .includes(query.toLowerCase());

        return matchesCategory && matchesQuery;
      }),
    [query, category]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(124,58,237,.35),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,.25),transparent_30%),linear-gradient(180deg,#050713_0%,#090d1d_55%,#060914_100%)]" />

      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(139,92,246,.20)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.20)_1px,transparent_1px)] bg-[size:70px_70px] opacity-25" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_35px_rgba(168,85,247,.55)]">
              <Factory className="h-7 w-7" />
            </div>

            <div>
              <div className="text-xl font-black leading-tight">Fábrica de Produtos IA</div>
              <div className="text-xs text-violet-200">Prompts • Apps • Automações</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
            <a href="#recebe" className="hover:text-white">
              O que você recebe
            </a>
            <a href="#bonus" className="hover:text-white">
              Bônus
            </a>
            <a href="#depoimentos" className="hover:text-white">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>

          <a href="#preco">
            <Button className="h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 font-black hover:opacity-90">
              🚀 Quero acesso imediato
            </Button>
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm font-black text-violet-200">
              <Zap className="h-4 w-4" /> BIBLIOTECA PREMIUM DE PROMPTS
            </span>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-tight md:text-7xl">
              Transforme ideias em produtos digitais{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                com IA em minutos
              </span>
              , não meses.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Acesse mais de 100 prompts prontos, frameworks, checklists e estratégias
              para criar aplicativos, automações, landing pages, MVPs e negócios digitais
              sem precisar programar.
            </p>

            <div className="grid gap-4 text-sm font-bold sm:grid-cols-3">
              {[
                [Rocket, "Copie, cole e execute"],
                [Clock, "Economize semanas de trabalho"],
                [Target, "Crie produtos que vendem"],
              ].map(([Icon, item]: any) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-violet-400/30 bg-violet-500/25 text-violet-200 shadow-[0_0_22px_rgba(168,85,247,.35)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#preco">
                <Button className="h-14 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 text-base font-black shadow-[0_0_35px_rgba(217,70,239,.35)] hover:opacity-90">
                  🚀 Quero acessar agora <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="#biblioteca">
                <Button
                  variant="outline"
                  className="h-14 rounded-xl border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10"
                >
                  <Play className="mr-2 h-4 w-4" /> Ver produto demo
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-3">
                {["L", "J", "R"].map((letter) => (
                  <div
                    key={letter}
                    className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#060914] bg-gradient-to-br from-violet-400 to-fuchsia-500 font-black"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div>
                <div className="tracking-widest text-yellow-300">★★★★★</div>
                <p className="text-sm text-slate-300">
                  <b>Mais de 1.500 empreendedores</b>
                  <br />
                  já estão criando com IA
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-violet-500/25 blur-3xl" />

            <Card className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-white text-slate-950 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-950 to-slate-950 p-8 text-white">
                  <div className="relative z-10 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                        <BookOpen className="h-6 w-6" />
                      </div>

                      <div>
                        <div className="text-lg font-black">Fábrica de Produtos IA</div>
                        <div className="text-sm text-violet-100">Biblioteca premium</div>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black text-slate-950">
                      NOVO
                    </span>
                  </div>

                  <div className="relative z-10 grid items-center gap-4 md:grid-cols-[.9fr_1.1fr]">
                    <div>
                      <h2 className="mb-4 text-3xl font-black md:text-4xl">
                        Seu atalho para criar produtos com IA
                      </h2>

                      <p className="leading-7 text-violet-100">
                        Prompts organizados para transformar ideias em apps, ofertas, páginas
                        de venda e automações.
                      </p>
                    </div>

                    <FactoryIllustration />
                  </div>
                </div>

                <div className="grid gap-3 bg-white p-6">
                  {[
                    [Rocket, "MVPs com IA", "Crie a primeira versão do seu produto rapidamente."],
                    [DollarSign, "Páginas que vendem", "Use estruturas de copy, oferta e conversão."],
                    [Settings, "Automações e apps", "Monte fluxos, dashboards e sistemas sem complicação."],
                  ].map(([Icon, title, desc]: any) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-100 text-violet-700">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-black">{title}</h3>
                        <p className="text-sm text-slate-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-0 rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl md:grid-cols-5">
          {[
            [BookOpen, "100+", "Prompts prontos", "para usar"],
            [Layers, "8", "Categorias", "completas"],
            [Users, "Para todos", "Empreendedores,", "agências e criadores"],
            [Zap, "Resultados rápidos", "Crie, teste e valide", "em tempo recorde"],
            [ShieldCheck, "100% Seguro", "Comandos testados", "para reduzir erros"],
          ].map(([Icon, big, line1, line2]: any) => (
            <div
              key={big}
              className="flex items-center gap-4 px-4 py-3 last:border-r-0 md:border-r md:border-white/10"
            >
              <Icon className="h-10 w-10 text-violet-400" />

              <div>
                <div className="text-lg font-black">{big}</div>
                <div className="text-sm text-slate-300">
                  {line1}
                  <br />
                  {line2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="recebe" className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-2 font-black text-violet-300">TUDO QUE VOCÊ PRECISA</p>
        <h2 className="mb-8 text-4xl font-black md:text-5xl">O que você vai receber</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {receives.map(([Icon, title, desc]: any) => (
            <Card key={title} className="rounded-2xl border border-white/10 bg-[#111629] text-white shadow-xl">
              <CardContent className="flex gap-4 p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-500/20 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="mb-2 font-black">{title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="bonus" className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.05fr_.95fr]">
        <Card className="rounded-3xl border border-white/10 bg-[#111629] text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-black text-violet-300">🎁 Bônus exclusivos</h2>

            <div className="space-y-3">
              {bonuses.map(([emoji, title, desc, price]) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex gap-4">
                    <div className="text-2xl">{emoji}</div>

                    <div>
                      <b>{title}</b>
                      <p className="text-sm text-slate-300">{desc}</p>
                    </div>
                  </div>

                  <span className="rounded-lg bg-violet-600 px-3 py-1 font-black">{price}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 text-center font-black">
              Valor total dos bônus: R$ 388
            </div>
          </CardContent>
        </Card>

        <Card
          id="preco"
          className="rounded-3xl border border-violet-400/40 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,.65),transparent_40%),linear-gradient(135deg,#201133,#f7f3ff)] text-white shadow-[0_0_60px_rgba(168,85,247,.25)]"
        >
          <CardContent className="space-y-6 p-8">
            <span className="inline-block rounded-xl bg-yellow-300 px-4 py-2 text-sm font-black text-slate-950">
              OFERTA DE LANÇAMENTO
            </span>

            <div>
              <span className="text-4xl font-black">R$</span>{" "}
              <span className="text-7xl font-black">47</span>{" "}
              <span className="text-violet-100">acesso vitalício</span>
            </div>

            <div className="space-y-2 font-medium text-white">
              <p>✅ Acesso vitalício à biblioteca completa</p>
              <p>✅ Atualizações gratuitas para sempre</p>
              <p>✅ Suporte via comunidade</p>
              <p>✅ 7 dias de garantia incondicional</p>
            </div>

            <a href="#biblioteca">
              <Button className="h-14 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-base font-black hover:opacity-90">
                🚀 Quero acesso imediato
              </Button>
            </a>

            <p className="text-center text-sm text-violet-100">
              Pagamento seguro • Acesso imediato
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-8">
        <Card className="rounded-3xl border border-white/10 bg-[#111629] text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-black text-violet-300">
              <HelpCircle className="mr-2 inline h-6 w-6" /> Dúvidas frequentes
            </h2>

            {[
              "Como funciona o acesso?",
              "Por quanto tempo tenho acesso?",
              "Recebo atualizações?",
              "Como recebo os bônus?",
            ].map((q) => (
              <details
                key={q}
                className="group mb-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <summary className="cursor-pointer font-bold">{q}</summary>
                <p className="mt-3 text-slate-300">
                  Após a compra, você recebe acesso ao material e pode usar os prompts sempre
                  que quiser.
                </p>
              </details>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="biblioteca" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-black text-violet-300">DEMONSTRAÇÃO</span>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Prompts prontos para copiar</h2>
            <p className="mt-3 text-slate-300">
              Escolha uma categoria, copie o prompt e use na sua ferramenta de IA favorita.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar prompt..."
                className="h-11 w-full rounded-xl border border-white/10 bg-[#111629] pl-9 pr-4 text-white outline-none focus:ring-2 focus:ring-violet-500 sm:w-64"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-[#111629] pl-9 pr-8 text-white outline-none focus:ring-2 focus:ring-violet-500"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.title} prompt={prompt} />
          ))}
        </div>
      </section>

      <section id="depoimentos" className="mx-auto max-w-7xl px-6 pb-12">
        <h2 className="mb-6 text-2xl font-black text-violet-300">
          👥 Quem já está criando produtos com IA
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([name, role, text]) => (
            <Card key={name} className="rounded-2xl border border-white/10 bg-[#111629] text-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-3 text-yellow-300">★★★★★</div>
                <p className="mb-4 leading-7 text-slate-200">“{text}”</p>
                <b>{name}</b>
                <p className="text-sm text-slate-400">{role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Card className="rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-violet-700 to-fuchsia-600 text-white shadow-[0_0_80px_rgba(168,85,247,.3)]">
          <CardContent className="space-y-6 p-10 text-center">
            <BadgeCheck className="mx-auto h-14 w-14" />

            <h2 className="text-4xl font-black md:text-5xl">
              Pronto para criar seu primeiro produto com IA?
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-violet-100">
              Mais de 100 prompts, bônus exclusivos, atualizações vitalícias e garantia de 7 dias.
            </p>

            <a href="#preco">
              <Button className="h-14 rounded-xl bg-white px-8 font-black text-slate-950 hover:bg-violet-100">
                🚀 Quero acesso imediato
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  Clock,
  Copy,
  DollarSign,
  Filter,
  Gift,
  HelpCircle,
  Layers,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";

const categories = ["Todos", "MVP", "Design", "Banco de dados", "Autenticação", "SEO", "Monetização", "Correções"];

const prompts = [
  { title: "Transformar ideia em produto", category: "MVP", level: "Essencial", text: "Transforme minha ideia [descreva a ideia] em um produto digital completo. Crie proposta de valor, público-alvo, funcionalidades principais, telas necessárias, modelo de monetização e próximos passos para lançar rápido." },
  { title: "Criar MVP com IA", category: "MVP", level: "Essencial", text: "Crie um MVP completo para [ideia] com página inicial, dashboard, fluxo principal e banco de dados. Antes de implementar, liste telas, funcionalidades e regras de negócio." },
  { title: "Landing page que vende", category: "Monetização", level: "Growth", text: "Crie uma landing page de alta conversão para vender [produto]. Inclua headline forte, promessa clara, benefícios, prova social, bônus, garantia, FAQ e chamada para ação." },
  { title: "Refatoração visual premium", category: "Design", level: "Visual", text: "Transforme esta interface em uma experiência premium, moderna e responsiva. Use hierarquia visual clara, espaçamento generoso, cards elegantes e microinterações." },
  { title: "Criar banco de dados", category: "Banco de dados", level: "Técnico", text: "Modele o banco de dados para este app: [descrição]. Crie tabelas, campos, relacionamentos, regras de segurança e exemplos de dados." },
  { title: "Login seguro com perfis", category: "Autenticação", level: "Técnico", text: "Adicione autenticação com login, cadastro, recuperação de senha e perfis de usuário. Proteja rotas privadas e crie mensagens de erro amigáveis." },
];

const bonuses = [
  ["💻", "Templates de Landing Pages", "Modelos prontos para copiar e adaptar.", "R$97"],
  ["✏️", "Scripts de Copy que Vendem", "Estruturas de copy testadas e validadas.", "R$97"],
  ["🏷️", "Modelos de Oferta Irresistível", "Ofertas prontas para diferentes nichos.", "R$97"],
  ["🚀", "Plano de Lançamento em 7 Dias", "Passo a passo para lançar seu produto.", "R$97"],
];

const testimonials = [
  ["Lucas Mendes", "Fundador de SaaS", "Os prompts me economizaram semanas de trabalho. Consegui lançar meu MVP em tempo recorde!"],
  ["Juliana Castro", "Especialista em Marketing", "As estruturas de copy e landing pages aumentaram minhas conversões em mais de 3x."],
  ["Rafael Oliveira", "Empreendedor Digital", "Finalmente um material prático e direto ao ponto. Uso todos os dias no meu negócio."],
];

function Button({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "white"; className?: string; }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 font-black transition-all duration-200 active:scale-[.98]";
  const styles = {
    primary: "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 text-white shadow-[0_0_35px_rgba(217,70,239,.35)] hover:shadow-[0_0_55px_rgba(217,70,239,.5)]",
    secondary: "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]",
    white: "bg-white text-[#070a16] hover:bg-violet-100",
  };
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}

function PromptCard({ prompt }: { prompt: (typeof prompts)[number] }) {
  const [copied, setCopied] = useState(false);
  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex gap-2">
            <span className="rounded-full bg-violet-500/25 px-3 py-1 text-xs font-bold text-violet-200">{prompt.category}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{prompt.level}</span>
          </div>
          <h3 className="text-lg font-black">{prompt.title}</h3>
        </div>
        <button onClick={copyPrompt} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white hover:bg-white/10">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <p className="text-sm leading-7 text-slate-300">{prompt.text}</p>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative h-[270px] w-full overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[#0b1020] p-5 shadow-[0_0_70px_rgba(168,85,247,.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,70,239,.35),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(124,58,237,.35),transparent_34%)]" />

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black text-violet-200">DASHBOARD IA</p>
          <h3 className="text-lg font-black text-white">Produto Digital</h3>
        </div>
        <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">AO VIVO</span>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-3">
        {[
          ["Receita", "R$12.450"],
          ["Leads", "1.842"],
          ["Conversão", "7.8%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <p className="text-[11px] font-bold text-slate-300">{label}</p>
            <p className="mt-1 text-lg font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-4 rounded-2xl border border-white/10 bg-white/10 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">Crescimento</span>
          <span className="text-xs font-black text-emerald-300">+38%</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {[35, 48, 42, 65, 58, 72, 88, 76, 94].map((h, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-600 to-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,.45)]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
          <p className="text-xs text-slate-300">Automações</p>
          <p className="font-black text-white">24 ativas</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
          <p className="text-xs text-slate-300">MVPs criados</p>
          <p className="font-black text-white">312</p>
        </div>
      </div>
    </div>
  );
}

function SocialProofBar() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-600">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-4 text-center md:grid-cols-4">
        <div>
          <div className="text-yellow-300">★★★★★</div>
          <p className="text-sm font-black text-white">4.9/5 de avaliação</p>
        </div>
        <div>
          <p className="text-2xl font-black text-white">+1.500</p>
          <p className="text-sm text-violet-100">empreendedores</p>
        </div>
        <div>
          <p className="text-2xl font-black text-white">+300</p>
          <p className="text-sm text-violet-100">MVPs criados</p>
        </div>
        <div>
          <p className="text-2xl font-black text-white">+100</p>
          <p className="text-sm text-violet-100">automações lançadas</p>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-black uppercase tracking-wide text-violet-300">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesCategory = category === "Todos" || prompt.category === category;
      const matchesQuery = `${prompt.title} ${prompt.text} ${prompt.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");
        html, body, * { font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important; }
      `}</style>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_5%,rgba(124,58,237,.4),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(217,70,239,.25),transparent_32%),linear-gradient(180deg,#060914_0%,#0a0d1d_50%,#060914_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(139,92,246,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.14)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_36px_rgba(168,85,247,.55)]"><BookOpen size={28} /></div>
            <div><div className="text-xl font-black leading-tight">Fábrica de Produtos IA</div><div className="text-xs font-semibold text-violet-200">Prompts • Apps • Automações</div></div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-bold text-slate-200 md:flex">
            <a href="#recebe" className="hover:text-white">O que você recebe</a><a href="#bonus" className="hover:text-white">Bônus</a><a href="#depoimentos" className="hover:text-white">Depoimentos</a><a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <a href="#preco"><Button className="px-6 py-3">🚀 Quero criar meu produto agora</Button></a>
        </nav>
      </header>

      <SocialProofBar />

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-white/[0.04] px-4 py-2 text-sm font-black text-violet-200"><Zap size={16} /> 🔥 BIBLIOTECA PREMIUM + BÔNUS EXCLUSIVOS</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.05em] md:text-[72px]">Transforme ideias em produtos digitais <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">com IA em minutos</span>, não meses.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">Acesse mais de 100 prompts prontos, frameworks, checklists e estratégias para criar aplicativos, automações, landing pages, MVPs e negócios digitais sem precisar programar.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[[Rocket, "Copie, cole e execute"], [Clock, "Economize semanas de trabalho"], [Target, "Crie produtos que vendem"]].map(([Icon, text]: any) => (
                <div key={text} className="flex items-center gap-3 text-sm font-black"><div className="grid h-11 w-11 place-items-center rounded-full border border-violet-300/25 bg-violet-500/20 text-violet-200 shadow-[0_0_22px_rgba(168,85,247,.35)]"><Icon size={20} /></div><span>{text}</span></div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row"><a href="#preco"><Button>🚀 Quero criar agora <ArrowRight className="ml-2" size={18} /></Button></a><a href="#biblioteca"><Button variant="secondary"><Play className="mr-2" size={18} /> Ver produto demo</Button></a></div>
            <div className="flex items-center gap-4 pt-1"><div className="flex -space-x-3">{["L", "J", "R"].map((letter) => <div key={letter} className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#060914] bg-gradient-to-br from-violet-400 to-fuchsia-500 text-sm font-black">{letter}</div>)}</div><div><div className="tracking-[.2em] text-yellow-300">★★★★★</div><p className="text-sm text-slate-300"><b>Mais de 1.500 empreendedores</b><br />já estão criando com IA</p></div></div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-violet-500/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/25 bg-white text-slate-950 shadow-[0_0_80px_rgba(168,85,247,.22)]">
              <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b0d1a] p-8 text-white">
                <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><BookOpen size={24} /></div><div><div className="text-lg font-black">Fábrica de Produtos IA</div><div className="text-sm text-violet-100">Biblioteca premium</div></div></div><span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black text-slate-950">NOVO</span></div>
                <div className="grid items-center gap-4 md:grid-cols-[.85fr_1.15fr]"><div><h2 className="mb-4 text-3xl font-black leading-tight md:text-4xl">Seu atalho para criar produtos com IA</h2><p className="leading-7 text-violet-100">Prompts organizados para transformar ideias em apps, ofertas, páginas de venda e automações.</p></div><DashboardMockup /></div>
              </div>
              <div className="grid gap-3 bg-white p-6">{[[Rocket, "MVPs com IA", "Crie a primeira versão do seu produto rapidamente."], [DollarSign, "Páginas que vendem", "Use estruturas de copy, oferta e conversão."], [Zap, "Automações e apps", "Monte fluxos, dashboards e sistemas sem complicação."]].map(([Icon, title, desc]: any) => <div key={title} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"><div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-100 text-violet-700"><Icon size={24} /></div><div><h3 className="font-black">{title}</h3><p className="text-sm text-slate-600">{desc}</p></div></div>)}</div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl md:grid-cols-5">{[[BookOpen, "100+", "Prompts prontos", "para usar"], [Layers, "8", "Categorias", "completas"], [Users, "Para todos", "Empreendedores,", "agências e criadores"], [Zap, "Resultados rápidos", "Crie, teste e valide", "em tempo recorde"], [ShieldCheck, "100% Seguro", "Comandos testados", "para reduzir erros"]].map(([Icon, big, line1, line2]: any) => <div key={big} className="flex items-center gap-4 px-4 py-3 md:border-r md:border-white/10 last:border-r-0"><Icon className="text-violet-400" size={40} /><div><div className="text-lg font-black">{big}</div><div className="text-sm text-slate-300">{line1}<br />{line2}</div></div></div>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Crie produtos reais" title="O que você consegue criar com a biblioteca" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["🚀", "MVPs e SaaS", "Planeje, estruture e tire sua ideia do papel com prompts prontos."],
            ["💻", "Landing Pages", "Crie páginas de venda com copy, oferta, FAQ, bônus e CTA."],
            ["⚙️", "Automações", "Monte fluxos, integrações, dashboards e processos automáticos."],
            ["💰", "Produtos digitais", "Transforme conhecimento em ofertas vendáveis e escaláveis."],
          ].map(([emoji, title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/20 text-3xl">
                {emoji}
              </div>
              <h3 className="mb-2 text-lg font-black">{title}</h3>
              <p className="text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="recebe" className="mx-auto max-w-7xl px-6 py-12"><SectionTitle eyebrow="Tudo que você precisa" title="O que você vai receber" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[[BookOpen, "Biblioteca com 100+ prompts", "Prompts prontos e testados para cada etapa da criação do seu produto."], [Layers, "8 categorias completas", "MVP, Design, Banco de dados, Autenticação, SEO, Monetização e Correções."], [Gift, "Frameworks e checklists", "Estruturas passo a passo para planejar, criar, lançar e escalar."], [Rocket, "Atualizações gratuitas", "Novos prompts e estratégias adicionados constantemente."], [Star, "Estratégias de monetização", "Modelos de oferta, precificação, upsell, copy e muito mais."], [Users, "Suporte via comunidade", "Tire dúvidas e troque experiências com outros criadores."]].map(([Icon, title, desc]: any) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl"><div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 text-violet-300"><Icon size={24} /></div><h3 className="mb-2 font-black">{title}</h3><p className="text-sm leading-7 text-slate-300">{desc}</p></div>)}</div></section>

      <section id="bonus" className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.05fr_.95fr]"><div className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-2xl"><h2 className="mb-6 text-2xl font-black text-violet-300">🎁 Bônus exclusivos</h2><div className="space-y-3">{bonuses.map(([emoji, title, desc, price]) => <div key={title} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"><div className="flex gap-4"><div className="text-2xl">{emoji}</div><div><b>{title}</b><p className="text-sm text-slate-300">{desc}</p></div></div><span className="rounded-lg bg-violet-600 px-3 py-1 font-black">{price}</span></div>)}</div><div className="mt-5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 text-center font-black">Valor total dos bônus: R$ 388</div></div><div id="preco" className="rounded-3xl border border-violet-300/50 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,.5),transparent_38%),linear-gradient(135deg,#140821,#5b21b6_45%,#c026d3)] p-8 text-white shadow-[0_0_90px_rgba(217,70,239,.38)]"><span className="inline-block rounded-xl bg-yellow-300 px-4 py-2 text-sm font-black text-slate-950">OFERTA DE LANÇAMENTO</span><div className="my-6"><span className="text-4xl font-black">R$</span> <span className="text-7xl font-black">47</span> <span className="text-violet-100">acesso vitalício</span></div><div className="mb-6 space-y-2 font-semibold text-white"><p>✅ Acesso vitalício à biblioteca completa</p><p>✅ Atualizações gratuitas para sempre</p><p>✅ Suporte via comunidade</p><p>✅ 7 dias de garantia incondicional</p></div><a href="#biblioteca"><Button className="w-full">🚀 Quero criar meu produto agora</Button></a><p className="mt-4 text-center text-sm text-violet-100">Pagamento seguro • Acesso imediato</p></div></section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-8"><div className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-2xl"><h2 className="mb-6 text-2xl font-black text-violet-300"><HelpCircle className="mr-2 inline" size={24} /> Dúvidas frequentes</h2>{["Como funciona o acesso?", "Por quanto tempo tenho acesso?", "Recebo atualizações?", "Como recebo os bônus?"].map((q) => <details key={q} className="mb-3 rounded-xl border border-white/10 bg-white/[0.045] p-4"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-3 text-slate-300">Após a compra, você recebe acesso ao material e pode usar os prompts sempre que quiser.</p></details>)}</div></section>

      <section id="biblioteca" className="mx-auto max-w-7xl px-6 py-12"><div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Demonstração" title="Prompts prontos para copiar" /><div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar prompt..." className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.045] pl-9 pr-4 text-white outline-none focus:ring-2 focus:ring-violet-500 sm:w-64" /></div><div className="relative"><Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><select value={category} onChange={(e) => setCategory(e.target.value)} className="h-11 rounded-xl border border-white/10 bg-[#111629] pl-9 pr-8 text-white outline-none focus:ring-2 focus:ring-violet-500">{categories.map((item) => <option key={item}>{item}</option>)}</select></div></div></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredPrompts.map((prompt) => <PromptCard key={prompt.title} prompt={prompt} />)}</div></section>

      <section id="depoimentos" className="mx-auto max-w-7xl px-6 pb-12"><h2 className="mb-6 text-2xl font-black text-violet-300">👥 Quem já está criando produtos com IA</h2><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([name, role, text]) => <div key={name} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl"><div className="mb-3 text-yellow-300">★★★★★</div><p className="mb-4 leading-7 text-slate-200">“{text}”</p><b>{name}</b><p className="text-sm text-slate-400">{role}</p></div>)}</div></section>

      <section className="mx-auto max-w-5xl px-6 pb-20"><div className="rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-violet-700 to-fuchsia-600 p-10 text-center text-white shadow-[0_0_80px_rgba(168,85,247,.3)]"><BadgeCheck className="mx-auto mb-5" size={56} /><h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Pronto para transformar sua ideia em um produto vendável?</h2><p className="mx-auto my-6 max-w-2xl text-lg text-violet-100">Acesse a biblioteca completa, copie os prompts e comece a construir seu primeiro MVP, página de vendas ou automação ainda hoje. Oferta de lançamento por tempo limitado.</p><a href="#preco"><Button variant="white">🚀 Quero criar meu produto agora</Button></a></div></section>
    </main>
  );
}

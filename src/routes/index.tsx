import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Users,
  Brain,
  Activity,
  Sparkles,
  ClipboardList,
  Puzzle,
  ShieldCheck,
  Star,
  Apple,
  Play,
} from "lucide-react";

import logoTexto from "@/assets/logo_texto.svg.asset.json";
import logoReduzida from "@/assets/logo_reduzida.svg.asset.json";
import heroFamily from "@/assets/hero-family.jpg";
import featureReading from "@/assets/feature-reading.jpg";
import featureDrawing from "@/assets/feature-drawing.jpg";
import featureDiversity from "@/assets/feature-diversity.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Áreas", href: "#areas" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const areas = [
  {
    icon: MessageCircle,
    title: "Comunicação",
    desc: "Da primeira palavra às trocas mais complexas — expressão, compreensão e linguagem funcional.",
  },
  {
    icon: Users,
    title: "Social",
    desc: "Contato visual, interação com pares, brincadeiras compartilhadas e habilidades de convivência.",
  },
  {
    icon: Brain,
    title: "Cognitiva",
    desc: "Atenção, memória, imitação, resolução de problemas e pré-requisitos para aprender.",
  },
  {
    icon: Activity,
    title: "Motora",
    desc: "Coordenação global e fina, do sentar e correr ao segurar o lápis com firmeza.",
  },
  {
    icon: Sparkles,
    title: "Funcional",
    desc: "Autonomia no dia a dia: alimentação, higiene, vestuário e rotinas em casa.",
  },
];

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Cadastre seu filho",
    desc: "Informe idade, sexo, condições e síndromes. Você pode acompanhar mais de uma criança na mesma conta.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Triagem inteligente",
    desc: "Antes de começar o checklist da idade, fazemos perguntas-chave das faixas anteriores para achar o ponto de partida real.",
  },
  {
    n: "03",
    icon: Puzzle,
    title: "Checklist adaptativo",
    desc: "Se houver lacunas, recuamos e sugerimos trabalhar os pré-requisitos. Se dominar, avançamos com a idade cronológica.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Programas ABA no dia a dia",
    desc: "Você recebe exercícios e programas de ensino específicos para aquisição e generalização das habilidades em casa.",
  },
];

const testimonials = [
  {
    quote:
      "Pela primeira vez entendi por onde começar. O app mostrou pré-requisitos que passavam batido na terapia e viraram nossa rotina em casa.",
    name: "Mariana S.",
    role: "Mãe do Bento, 4 anos",
  },
  {
    quote:
      "A triagem foi certeira. Recuou duas faixas, trabalhamos o básico e em pouco tempo o Théo estava avançando com muito mais segurança.",
    name: "Rafael A.",
    role: "Pai do Théo, 5 anos",
  },
  {
    quote:
      "Simples de usar, com atividades que fazem sentido no cotidiano. Sinto que estou realmente incentivando o desenvolvimento dela.",
    name: "Camila R.",
    role: "Mãe da Sofia, 6 anos",
  },
];

const faqs = [
  {
    q: "O Avance Kids substitui a terapia com profissional?",
    a: "Não. Somos uma ferramenta de apoio à família, com base nos princípios da Análise do Comportamento Aplicada (ABA), para você incentivar o desenvolvimento no dia a dia — em complemento ao trabalho de profissionais.",
  },
  {
    q: "Meu filho ainda não tem diagnóstico. Posso usar?",
    a: "Sim. O app é útil para qualquer criança em desenvolvimento e especialmente valioso para crianças neurodivergentes ou com atrasos, pois avalia a realidade funcional e não apenas a idade cronológica.",
  },
  {
    q: "Posso cadastrar mais de uma criança?",
    a: "Sim. Uma única conta permite acompanhar múltiplas crianças, cada uma com seu perfil, triagem e plano.",
  },
  {
    q: "Quais faixas etárias são cobertas?",
    a: "Contemplamos as principais faixas do desenvolvimento infantil, com checklists por idade e recuo automático para os pré-requisitos quando necessário.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoReduzida.url} alt="Avance Kids" className="h-9 w-9" />
            <span className="text-lg font-bold tracking-tight">
              Avance <span className="text-primary">Kids</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#download"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Baixar o app
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div
          className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl animate-blob"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-secondary/15 blur-3xl animate-blob"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Baseado em Terapia ABA
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Seja um <span className="text-gradient-brand">incentivador</span>
              <br />
              do desenvolvimento do seu filho.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              O Avance Kids avalia as habilidades reais da criança e cria um plano de ensino
              adaptado à sua realidade funcional — não apenas à idade cronológica. Feito para
              famílias que apoiam crianças neurodivergentes e com atrasos no desenvolvimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-muted"
              >
                Como funciona
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Triagem inteligente
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Checklist adaptativo
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Múltiplas crianças
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-glow">
              <img
                src={heroFamily}
                alt="Mãe brincando com seu filho e brinquedos educativos coloridos"
                width={1600}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating cards */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl bg-card px-5 py-4 shadow-card ring-1 ring-border sm:block animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Habilidade adquirida</p>
                  <p className="text-sm font-semibold">Aponta o que quer</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-card px-5 py-4 shadow-card ring-1 ring-border sm:block animate-float-slow [animation-delay:2s]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Programa ABA</p>
                  <p className="text-sm font-semibold">Imitação motora — nível 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { k: "Idade funcional", v: "Avaliamos o que a criança faz — não só quantos anos tem." },
            { k: "Sem lacunas", v: "Nenhum pré-requisito essencial fica para trás." },
            { k: "No dia a dia", v: "Programas ABA que cabem na sua rotina em casa." },
          ].map((it) => (
            <div key={it.k}>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{it.k}</p>
              <p className="mt-2 text-base font-medium text-foreground">{it.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Um caminho claro, do cadastro ao plano de ensino.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma lógica adaptativa que respeita o ritmo real de cada criança.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-primary/5 transition-colors group-hover:text-primary/10">
                {s.n}
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="relative overflow-hidden bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Áreas de desenvolvimento
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Cinco frentes,
                <br />
                um desenvolvimento completo.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                O checklist do Avance Kids avalia a criança dividindo as habilidades em categorias
                fundamentais — para que nenhuma dimensão do desenvolvimento fique de fora.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src={featureDiversity}
                  alt="Crianças diversas sorrindo juntas"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((a, i) => (
                <div
                  key={a.title}
                  className={`rounded-3xl border border-border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${
                    i === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É / SPLIT */}
      <section id="para-quem" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={featureReading}
                alt="Pai lendo um livro com o filho"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-card">
              <img
                src={featureDrawing}
                alt="Criança desenhando com a ajuda dos pais"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Para quem é
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A família em apoio ao desenvolvimento da criança.
            </h2>
            <p className="mt-4 text-muted-foreground">
              O Avance Kids foi criado para pais e cuidadores que querem participar ativamente do
              desenvolvimento dos filhos — com um método sério, baseado em evidências, e uma
              interface simples de usar.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Crianças no espectro autista (TEA) ou neurodivergentes",
                "Crianças com atrasos ou suspeita de atraso no desenvolvimento",
                "Famílias que já fazem terapia e querem continuar em casa",
                "Pais que buscam entender por onde começar",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Famílias que avançam
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              O que os pais estão dizendo.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-3xl border border-border bg-background p-7 shadow-card"
              >
                <div>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tudo o que você precisa saber.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                  <span className="text-xl leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-brand px-8 py-16 text-center text-primary-foreground shadow-glow sm:px-16 sm:py-20">
          <div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <img src={logoReduzida.url} alt="" className="mx-auto h-14 w-14" />
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Comece hoje a avançar com seu filho.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Baixe o Avance Kids e transforme a rotina da sua família em pequenos passos que fazem
              diferença de verdade.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-6 py-3.5 text-left text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Apple className="h-6 w-6" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest opacity-70">
                    Baixar na
                  </span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-6 py-3.5 text-left text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Play className="h-6 w-6" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest opacity-70">
                    Disponível no
                  </span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <img src={logoTexto.url} alt="Avance Kids" className="h-10 w-auto" />
          <p className="text-center text-xs text-muted-foreground sm:text-right">
            © {new Date().getFullYear()} Avance Kids. A família em apoio ao desenvolvimento infantil.
          </p>
        </div>
      </footer>
    </div>
  );
}

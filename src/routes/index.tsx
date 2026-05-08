import { createFileRoute } from "@tanstack/react-router";
import { Heart, Shield, MessageCircle, FileCheck, Award, Users, Stethoscope, Sparkles, Brain, AlertTriangle, CheckCircle2 } from "lucide-react";
import logoFaculdade from "@/assets/logo-faculdade.webp";
import heroImg from "@/assets/hero.webp";
import mariaBefore from "@/assets/maria-before.webp";
import mariaConsequences from "@/assets/maria-consequences.webp";
import checklistImg from "@/assets/checklist.webp";
import preventionImg from "@/assets/prevention.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segurança Odontológica: Guia para Pacientes" },
      { name: "description", content: "Guia educativo sobre segurança na odontologia, prevenção de erros e direitos do paciente." },
      { property: "og:title", content: "Segurança Odontológica: Guia para Pacientes" },
      { property: "og:description", content: "Aprenda sobre segurança na odontologia e conheça seus direitos como paciente." },
    ],
  }),
  component: Index,
});

const checklist = [
  { icon: MessageCircle, title: "Faça Perguntas", text: "Não hesite em questionar o dentista sobre o procedimento, riscos, benefícios e alternativas. Você tem direito a informações claras." },
  { icon: Brain, title: "Entenda Tudo", text: "Peça explicações em linguagem simples. Se não entender algo, peça para o dentista explicar novamente." },
  { icon: FileCheck, title: "Consentimento Informado", text: "Exija um termo de consentimento claro e documentado antes de qualquer procedimento invasivo." },
  { icon: FileCheck, title: "Registros Completos", text: "Solicite cópias de seus registros dentários, incluindo diagnósticos, tratamentos realizados e exames." },
  { icon: Award, title: "Profissionalismo", text: "Verifique as credenciais do profissional e se ele mantém-se atualizado com as práticas atuais." },
  { icon: Heart, title: "Confiança e Comunicação", text: "Escolha um dentista com quem você se sinta confortável e que ouça suas preocupações." },
];

const strategies = [
  { title: "Planejamento Rigoroso", text: "Diagnóstico preciso, exames complementares quando necessário, e elaboração de plano de tratamento detalhado." },
  { title: "Atualização Profissional", text: "Participação em cursos, congressos e leitura de literatura científica para manter-se atualizado." },
  { title: "Comunicação Eficaz", text: "Explicações claras aos pacientes, alinhamento de expectativas e estabelecimento de relacionamento de confiança." },
  { title: "Trabalho em Equipe", text: "Colaboração com outros profissionais, busca de segunda opinião em casos complexos e compartilhamento de conhecimento." },
  { title: "Documentação Completa", text: "Prontuário detalhado, termo de consentimento claro e documentação arquivada adequadamente." },
  { title: "Ética Profissional", text: "Compromisso com a excelência, respeito aos direitos do paciente e responsabilidade profissional." },
];

const steps = [
  {
    title: "Antes do Procedimento",
    obs: ["O dentista explicou claramente o procedimento?", "Você entendeu os riscos e benefícios?", "O consultório está limpo e organizado?", "O profissional pediu seu consentimento por escrito?"],
    action: "Se algo não ficou claro, faça perguntas. Exija um termo de consentimento assinado antes de qualquer procedimento invasivo.",
  },
  {
    title: "Durante o Procedimento",
    obs: ["O dentista usa equipamento de proteção adequado?", "O ambiente está estéril e bem iluminado?", "A equipe trabalha com calma e organização?", "Você sente dor excessiva ou algo anormal?"],
    action: "Se sentir dor intensa, levante a mão para sinalizar. Não hesite em comunicar desconforto. Você tem direito a anestesia adequada.",
  },
  {
    title: "Após o Procedimento",
    obs: ["O dentista explicou os cuidados pós-procedimento?", "Você recebeu instruções por escrito?", "Solicitou cópia dos registros e fotos do procedimento?", "Agendou acompanhamento para verificação?"],
    action: "Guarde todos os documentos e registros. Se tiver dúvidas, ligue para o consultório. Mantenha contato para acompanhamento.",
  },
  {
    title: "Se Suspeitar de um Erro",
    obs: ["Dor persistente ou piora após alguns dias?", "Inchaço, infecção ou sangramento anormal?", "O resultado não corresponde ao combinado?", "Dificuldade em mastigar ou falar?"],
    action: "1) Procure outra opinião profissional; 2) Documente todos os sintomas com fotos; 3) Guarde todos os comprovantes e registros; 4) Consulte um advogado especializado em direito odontológico; 5) Registre reclamação no Conselho Regional de Odontologia (CRO).",
  },
];

const faqs = [
  { q: "O que é considerado um erro odontológico?", a: "Um erro odontológico é uma conduta inadequada que resulta em prejuízo ao paciente, decorrente de falhas no processo de diagnóstico, planejamento ou execução de tratamentos." },
  { q: "Qual é a diferença entre erro e intercorrência?", a: "Uma intercorrência é uma complicação esperada e aceitável dentro dos riscos inerentes ao procedimento. Um erro é uma falha evitável que representa desvio do padrão de cuidado esperado." },
  { q: "Posso processar um dentista por erro?", a: "Sim. Se você sofreu danos comprovados por um erro odontológico, tem direito a buscar indenização através de ações judiciais. Recomenda-se consultar um advogado especializado." },
  { q: "Como posso proteger meus direitos como paciente?", a: "Faça perguntas, exija consentimento informado documentado, mantenha cópias de seus registros dentários, e escolha profissionais qualificados e de confiança." },
  { q: "O que fazer se suspeitar de um erro?", a: "Procure uma segunda opinião com outro profissional, mantenha registros de todos os sintomas e procedimentos, e considere consultar um advogado especializado em direito odontológico." },
];

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      {/* Top Bar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <img src={logoFaculdade} alt="Faculdade Serra Dourada" className="h-12 w-auto bg-white/0 rounded" />
            <div className="text-sm">
              <div className="font-semibold">Desenvolvido por:</div>
              <div className="text-white/85">Elivelton • Matheus • Lucas • Rafaela • Edvan</div>
            </div>
          </div>
          <div className="hidden lg:block text-xs text-white/75">Disciplina: Ética e Odontologia Legal</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF8C42] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <div className="font-display font-bold text-lg leading-tight">Segurança Odontológica</div>
              <div className="text-xs text-[#666]">Guia para Pacientes</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[#4A90E2] font-semibold">
            <a href="#top" className="hover:underline">Início</a>
            <a href="#historia" className="hover:underline">História de Maria</a>
            <a href="#seguranca" className="hover:underline">Segurança</a>
            <a href="#duvidas" className="hover:underline">Dúvidas</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">Sua Segurança é Nossa Prioridade</h1>
            <p className="mt-4 text-lg text-[#666]">Aprenda sobre segurança na odontologia e conheça seus direitos como paciente</p>
            <p className="mt-6 leading-relaxed">Este guia educativo apresenta informações essenciais sobre prevenção de erros odontológicos, baseado em casos reais e desenvolvido para orientar pacientes.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#historia" className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF8C42] text-white font-semibold shadow-md hover:opacity-80 hover:shadow-xl transition-all">Conheça a História de Maria</a>
              <a href="#seguranca" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#4A90E2] text-[#4A90E2] font-semibold hover:bg-[#4A90E2]/10 transition-all">Checklist de Segurança</a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={heroImg} alt="Dentista acolhedora com paciente" className="w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </section>

      {/* História de Maria */}
      <section id="historia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl">A História de Maria</h2>
            <p className="mt-4 text-lg text-[#666]">Um exemplo real de como um erro odontológico pode impactar a vida de um paciente</p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <img src={mariaBefore} alt="Maria antes do procedimento" className="w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]" />
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#FF8C42]/20 text-[#FF8C42] text-sm font-bold">Antes do Procedimento</span>
              <h3 className="mt-4 font-display font-bold text-2xl">Maria, 35 anos</h3>
              <p className="mt-4 leading-relaxed">Maria procurou um dentista para realizar um tratamento de canal em um molar inferior que estava causando dor. Ela tinha esperança de resolver o problema e voltar à sua vida normal.</p>
              <p className="mt-4 leading-relaxed">Infelizmente, durante o procedimento, o dentista cometeu erros graves por falta de atenção e pressa (imprudência).</p>
              <h4 className="mt-6 font-display font-bold text-lg">O Que Aconteceu?</h4>
              <ul className="mt-3 space-y-2 text-[#1A1A1A]">
                <li>• Não isolou adequadamente o dente</li>
                <li>• Utilizou a broca de forma incorreta, perfurando a raiz</li>
                <li>• Atingiu o osso adjacente</li>
                <li>• A obturação do canal foi feita de maneira incompleta</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img src={mariaConsequences} alt="Consequências do erro" className="w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]" />
            </div>
            <div className="lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-[#4A90E2]/20 text-[#4A90E2] text-sm font-bold">Consequências</span>
              <h3 className="mt-4 font-display font-bold text-2xl">O Impacto na Vida de Maria</h3>
              <p className="mt-4 leading-relaxed">O erro resultou em uma série de problemas que afetaram profundamente a saúde física, emocional e financeira de Maria.</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: "Danos Físicos", items: ["Dor crônica intensa", "Infecção bacteriana grave", "Perda do dente permanente", "Necessidade de implante dentário", "Custos adicionais altos"] },
              { icon: Sparkles, title: "Danos Estéticos", items: ["Alteração no contorno facial", "Preocupação com a aparência", "Impacto na autoestima", "Dificuldade em sorrir com confiança"] },
              { icon: Brain, title: "Danos Psicológicos", items: ["Ansiedade e estresse severos", "Perda de confiança nos dentistas", "Frustração e depressão", "Medo de novos tratamentos", "Qualidade de vida afetada"] },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#FF8C42]/15 text-[#FF8C42] flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl">{c.title}</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#666]">
                  {c.items.map((i) => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section id="seguranca" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl">Checklist de Segurança</h2>
            <p className="mt-4 text-lg text-[#666]">Pontos importantes para garantir sua segurança como paciente</p>
          </div>
          <img src={checklistImg} alt="Checklist de Segurança Odontológica" className="my-12 w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]" />
          <div className="grid md:grid-cols-2 gap-6">
            {checklist.map((c, i) => (
              <div key={c.title} className="p-6 rounded-xl border border-black/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all flex gap-4">
                <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${i % 2 === 0 ? "bg-[#FF8C42]/15 text-[#FF8C42]" : "bg-[#4A90E2]/15 text-[#4A90E2]"}`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg">{c.title}</h4>
                  <p className="mt-1 text-sm text-[#666] leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estratégias */}
      <section className="py-24 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl">Estratégias de Prevenção</h2>
            <p className="mt-4 text-lg text-[#666]">Como os profissionais podem evitar erros e garantir sua segurança</p>
          </div>
          <img src={preventionImg} alt="Estratégias de Prevenção" className="my-12 w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]" />
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <div key={s.title} className="p-6 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${i % 2 === 0 ? "bg-[#FF8C42]" : "bg-[#4A90E2]"}`}>{i + 1}</div>
                  <h4 className="font-display font-bold text-lg">{s.title}</h4>
                </div>
                <p className="mt-3 text-sm text-[#666] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl">Passo a Passo: O Que Observar e Como Agir</h2>
            <p className="mt-4 text-lg text-[#666]">Guia prático para pacientes identificarem possíveis problemas e agirem corretamente</p>
          </div>
          <div className="mt-12 space-y-8">
            {steps.map((s, i) => (
              <div key={s.title} className="p-6 md:p-8 rounded-xl bg-white border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${i === 3 ? "bg-[#4A90E2]" : "bg-[#FF8C42]"}`}>{i + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl">{s.title}</h3>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-sm font-bold"><AlertTriangle className="w-4 h-4 text-[#FF8C42]" /> O que observar:</div>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {s.obs.map((o) => <li key={o}>• {o}</li>)}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="w-4 h-4 text-[#4A90E2]" /> Como agir:</div>
                      <p className="mt-2 text-sm leading-relaxed">{s.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-24 bg-[#F5E6D3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl">Perguntas Frequentes</h2>
            <p className="mt-4 text-lg text-[#666]">Dúvidas comuns sobre segurança odontológica</p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all">
                <summary className="cursor-pointer p-6 font-display font-bold flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-[#FF8C42] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-[#666] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-[#FF8C42] mx-auto" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">Sua Segurança é Nossa Responsabilidade</h2>
          <p className="mt-4 text-[#666]">Pacientes informados e profissionais comprometidos com a excelência criam um ambiente de segurança e confiança na odontologia.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A90E2] text-white text-center py-6 px-4 text-sm">
        © 2026 Segurança Odontológica. Trabalho da Disciplina de Ética e Odontologia Legal.
      </footer>
    </div>
  );
}

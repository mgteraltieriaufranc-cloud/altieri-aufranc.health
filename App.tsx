import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Zona de Confianza / Legal Banner - Matrículas Arriba */}
      <div className="legal-banner border-b border-slate-800">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          <span className="font-bold">MN N° 59502/15</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="font-bold">MP N° 217 y 113</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="text-blue-400">Seguro Mala Praxis: La Segunda N° 40.264.697</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-slate-900 tracking-tight text-lg">
            Álvaro Altieri Aufranc
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#perfil" className="hover:text-blue-600 transition-colors">Perfil</a>
            <a href="#formacion" className="hover:text-blue-600 transition-colors">Formación</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="bg-white border-b border-slate-100">
        <div className="section-container text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Álvaro Altieri Aufranc
            </h1>
            {/* Copete / Subtítulo solicitado: Salud Mental */}
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold tracking-tight italic">
              Salud Mental
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl pt-2">
              Práctica profesional sustentada en la ética sanitaria y la formación académica avanzada. 
              Compromiso con la transparencia, la seguridad del paciente y la integridad institucional.
            </p>
          </div>
        </div>
      </header>

      {/* Professional Profile Section */}
      <section id="perfil" className="bg-slate-50">
        <div className="section-container grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Presentación Institucional</h2>
            <div className="prose prose-slate prose-lg text-slate-600 space-y-4">
              <p>
                Como profesional especializado en salud mental, mi labor se centra en la integración de criterios clínicos 
                y normativos para ofrecer un respaldo sólido a cada intervención. Mi enfoque es estrictamente profesional, 
                evitando el sensacionalismo y priorizando la comunicación clara y humana.
              </p>
              <p>
                La titularidad de la marca <strong>"La Piazza Terapias Integrativas"</strong> refleja un modelo de trabajo 
                basado en la calidad, el respeto por las leyes de ejercicio profesional y la actualización constante 
                en las ciencias del comportamiento.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Compromiso Ético</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">✓</div>
                Resguardo del Secreto Profesional
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">✓</div>
                Seguro de Mala Praxis Vigente
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">✓</div>
                Actualización Basada en Evidencia
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic / Training Section */}
      <section id="formacion" className="bg-white">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Marco Académico</h2>
            <p className="text-slate-500 mt-2">Formación universitaria y títulos de posgrado.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Máster en Musicoterapia", desc: "Universidad de Nebrija." },
              { title: "Posgrado en Psicología Forense", desc: "Universidad de Nebrija." },
              { title: "Diploma en Criminología", desc: "Universidad Siglo 21." },
              { title: "Licenciatura en Musicoterapia y Psicología", desc: "Títulos de Grado." },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors bg-slate-50/30">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Publicaciones Científicas / ORCID */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center gap-8 border border-slate-800">
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="text-xl font-bold">Publicaciones Científicas</h4>
              <p className="text-slate-400 text-sm">Registro oficial de investigaciones y producción académica.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 flex items-center gap-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">ORCID</span>
                <span className="font-mono text-lg font-medium text-white">0009-0006-8012-9817</span>
              </div>
              <a 
                href="https://orcid.org/0009-0006-8012-9817" 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-400 hover:text-blue-300 text-xs font-bold uppercase tracking-widest underline underline-offset-4"
              >
                Ver Registro Académico Completo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Canales de Comunicación</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Portal de información profesional e institucional. Para consultas académicas o administrativas, utilice los medios oficiales.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Correo Institucional</div>
                <div className="text-xl font-medium text-slate-900">info@lapiazzaterapias.com</div>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Marca Registrada</div>
                <div className="text-xl font-medium italic text-slate-900">La Piazza Terapias Integrativas</div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <div className="w-32 h-32 bg-white p-2 rounded-xl mb-4 border border-slate-200 shadow-inner">
                <div className="w-full h-full bg-slate-50 rounded border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-[10px] text-center font-bold uppercase">
                  Código QR <br/> Profesional
                </div>
              </div>
              <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Escanee para guardar contacto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Legal Notice */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-400">
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Aviso Legal Sanitario</h5>
              <p className="leading-relaxed text-xs">
                La información contenida en este sitio tiene carácter institucional y orientativo. No constituye diagnóstico, 
                indicación terapéutica ni reemplaza la consulta profesional presencial. El ejercicio profesional se encuentra 
                debidamente habilitado por las autoridades sanitarias correspondientes.
              </p>
            </div>
            <div className="space-y-4 text-right">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Información Regulatoria</h5>
              <div className="text-xs space-y-1">
                <p>Matrícula Nacional N° 59502/15</p>
                <p>Matrículas Privadas N° 217 y 113</p>
                <p>Póliza La Segunda Seguros N° 40.264.697</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Álvaro Altieri Aufranc</span>
            <div className="flex gap-6">
              <span>Transparencia</span>
              <span>Responsabilidad</span>
              <span>Ética</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
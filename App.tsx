import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Zona de Confianza / Legal Banner */}
      <div className="legal-banner border-b border-slate-800">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          <span>MN N° 59502/15</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span>MP N° 217 y 113</span>
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
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded">
              Salud Mental
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Excelencia en el cuidado <br/><span className="text-blue-600">de la Salud Mental</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Práctica profesional sustentada en la ética sanitaria y la formación académica avanzada. 
              Compromiso con la transparencia, la seguridad del paciente y la integridad institucional.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contacto" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Consultas Institucionales
              </a>
              <a href="#perfil" className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all">
                Conocer Perfil
              </a>
            </div>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Marco Académico</h2>
              <p className="text-slate-500 mt-2">Formación universitaria y producción científica registrada.</p>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">ORCID</span>
              <span className="font-mono text-sm text-blue-600">0009-0006-8012-9817</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Grado y Formación Continua", desc: "Docente universitario y formador." },
              { title: "Máster en Musicoterapia", desc: "Universidad de Nebrija." },
              { title: "Posgrado en Psicología Forense", desc: "Universidad de Nebrija." },
              { title: "Diploma en Criminología", desc: "Universidad Siglo 21." },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors bg-slate-50/30">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-blue-900">Publicaciones Científicas</h4>
              <p className="text-blue-700/70 text-sm">Registro oficial de investigaciones y artículos especializados en salud y comportamiento.</p>
            </div>
            <a href="https://orcid.org/0009-0006-8012-9817" target="_blank" rel="noreferrer" className="px-6 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
              Consultar Registro
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-slate-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Canales de Comunicación</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Este sitio es un portal de información profesional. Para consultas sobre atención, 
              supervisiones o convenios institucionales, por favor utilice los medios oficiales.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Correo Institucional</div>
                <div className="text-xl font-medium">info@lapiazzaterapias.com</div>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Marca Registrada</div>
                <div className="text-xl font-medium italic">La Piazza Terapias Integrativas</div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col items-center">
              <div className="w-32 h-32 bg-white p-2 rounded-xl mb-4">
                {/* Visual placeholder for QR */}
                <div className="w-full h-full bg-slate-100 rounded border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-[10px] text-center font-bold uppercase">
                  Código QR <br/> Profesional
                </div>
              </div>
              <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Escanee para guardar contacto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Legal Notice */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500">
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Aviso Legal Sanitario</h5>
              <p className="leading-relaxed">
                La información contenida en este sitio tiene carácter institucional y orientativo. No constituye diagnóstico, 
                indicación terapéutica ni reemplaza la consulta profesional presencial. El ejercicio profesional se encuentra 
                debidamente habilitado por las autoridades sanitarias correspondientes.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Jurisdicción y Ética</h5>
              <p className="leading-relaxed">
                Sitio diseñado bajo criterios de ética sanitaria y protección de datos. Los contenidos cumplen con la 
                normativa de transparencia y publicidad para profesionales de la salud. 
              </p>
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
import { useState, useEffect } from 'react';
import { 
  Droplets, 
  Shield, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Home,
  Sparkles,
  Clock,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [formDialog, setFormDialog] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormDialog(false);
      setFormSubmitted(false);
      setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const contaminants = [
    { name: 'Cloro', desc: 'Hasta 98-99% de eliminación' },
    { name: 'Cloramina', desc: 'Remoción completa' },
    { name: 'Plomo', desc: 'Hasta 99% de remoción' },
    { name: 'Metales pesados', desc: 'Mercurio, arsénico, cadmio' },
    { name: 'Pesticidas', desc: 'Eliminación total' },
    { name: 'THMs', desc: 'Subproductos cancerígenos' },
    { name: 'PFAS/PFOA', desc: 'Compuestos tóxicos' },
    { name: 'Bacterias', desc: 'Inhibición completa' }
  ];

  const healthRisks = [
    {
      title: 'Cáncer de Vejiga',
      desc: 'El riesgo de cáncer es hasta un 93% mayor en personas que consumen agua clorada según el Consejo de Calidad Ambiental de EE.UU.',
      icon: AlertTriangle
    },
    {
      title: 'Problemas Respiratorios',
      desc: 'La inhalación de vapor clorado durante la ducha causa irritación pulmonar y exacerba el asma, especialmente en niños.',
      icon: AlertTriangle
    },
    {
      title: 'Daño a la Piel y Cabello',
      desc: 'El cloro seca la piel, causa irritación y elimina los aceites naturales del cabello, dejándolo opaco y quebradizo.',
      icon: AlertTriangle
    },
    {
      title: 'Problemas Cardíacos',
      desc: 'Los trihalometanos (THMs) formados por el cloro están vinculados a efectos adversos en el sistema cardiovascular.',
      icon: AlertTriangle
    }
  ];

  const benefits = [
    {
      title: 'Agua Pura en Toda tu Casa',
      desc: 'Desde la cocina hasta la ducha, cada grifo entrega agua limpia y segura para tu familia.',
      icon: Home
    },
    {
      title: 'Protección Sin Sal',
      desc: 'Tecnología GreenWave que elimina el sarro sin usar sal, electricidad o desperdiciar agua.',
      icon: Leaf
    },
    {
      title: 'Salud Garantizada',
      desc: 'Elimina el 99% de contaminantes peligrosos incluyendo cloro, plomo y químicos tóxicos.',
      icon: Heart
    },
    {
      title: 'Ahorro a Largo Plazo',
      desc: 'Olvídate de comprar agua embotellada. El sistema se paga solo con el ahorro mensual.',
      icon: Clock
    }
  ];

  const stages = [
    {
      num: '01',
      title: 'KDF-55',
      desc: 'Elimina hasta 99% del cloro, metales pesados como plomo y mercurio, y reduce bacterias mediante proceso de oxidación-reducción.'
    },
    {
      num: '02',
      title: 'Carbón Activado Granular (GAC)',
      desc: 'Carbón de cáscara de coco certificado WQA. Elimina químicos, malos olores y sabores sin necesidad de enjuague de 24 horas.'
    },
    {
      num: '03',
      title: 'Carbón Catalítico (CAC)',
      desc: 'Tecnología patentada altamente efectiva para eliminar cloramina y subproductos de desinfección.'
    },
    {
      num: '04',
      title: 'Filtro Interceptor',
      desc: 'Nanofibra electro-absorptiva con potencial Zeta de 51mV. Elimina sedimentos, Cromo 6, bacterias, quistes y plomo.'
    },
    {
      num: '05',
      title: 'SP3-NAC GreenWave',
      desc: 'Cristalización asistida por nucleación que transforma minerales de dureza en cristales inofensivos, previniendo sarro sin sal.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="tel:7879729553" className="flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition">
              <Phone className="w-4 h-4" />
              (787) 972-9553
            </a>
            <span className="text-sm hidden sm:inline">Puerto Rico - Todo el Hogar</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">WaterGuru</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('problema')} className="text-gray-600 hover:text-blue-600 transition">El Problema</button>
              <button onClick={() => scrollToSection('solucion')} className="text-gray-600 hover:text-blue-600 transition">La Solución</button>
              <button onClick={() => scrollToSection('tecnologia')} className="text-gray-600 hover:text-blue-600 transition">Tecnología</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-600 hover:text-blue-600 transition">Beneficios</button>
              <Button onClick={() => setFormDialog(true)} className="bg-blue-600 hover:bg-blue-700">
                Cotizar Ahora
              </Button>
            </nav>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('problema')} className="text-left py-2 text-gray-600">El Problema</button>
              <button onClick={() => scrollToSection('solucion')} className="text-left py-2 text-gray-600">La Solución</button>
              <button onClick={() => scrollToSection('tecnologia')} className="text-left py-2 text-gray-600">Tecnología</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-left py-2 text-gray-600">Beneficios</button>
              <Button onClick={() => { setFormDialog(true); setIsMenuOpen(false); }} className="bg-blue-600 hover:bg-blue-700 w-full">
                Cotizar Ahora
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Sistema Certificado NSF/WQA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ¿Sabías que el <span className="text-blue-600">cloro</span> en tu agua puede estar dañando tu salud?
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                El 93% de las personas que consumen agua clorada tienen mayor riesgo de cáncer. 
                Descubre cómo proteger a tu familia con nuestro sistema de purificación 
                <strong> BodyGuard + GreenWave</strong> para toda tu casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setFormDialog(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/25"
                >
                  Cotizar Gratis Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a 
                  href="https://wa.me/7879729553"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Instalación incluida
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Garantía de por vida
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Financiamiento disponible
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://uswatersystems.com/cdn/shop/files/greenwave_3-0_cut_out_10x54_y_10x40.184_1200x.jpg?v=1756137977"
                alt="Sistema BodyGuard y GreenWave"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              El Agua que Bebes y Usas Diariamente Contiene <span className="text-red-500">Químicos Peligrosos</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Las autoridades de agua en Puerto Rico usan cloro y cloramina para desinfectar el agua, 
              pero estos químicos dejan consecuencias graves para la salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {healthRisks.map((risk, idx) => (
              <Card key={idx} className="border-red-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <risk.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{risk.title}</h3>
                  <p className="text-sm text-gray-600">{risk.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Qué son el Cloro y la Cloramina?
                </h3>
                <div className="space-y-4 text-blue-100">
                  <p>
                    El <strong>cloro</strong> es un gas químico usado desde 1908 para desinfectar agua. 
                    Aunque mata bacterias, reacciona con materia orgánica formando 
                    <strong> trihalometanos (THMs)</strong> y <strong>cloroformo</strong>, sustancias cancerígenas.
                  </p>
                  <p>
                    La <strong>cloramina</strong> (cloro + amoníaco) es más estable y permanece más tiempo en el agua. 
                    Recientemente se descubrió que forma un compuesto tóxico llamado 
                    <strong> anión cloronitramida</strong> cuyos efectos en la salud están siendo investigados.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <h4 className="font-bold text-lg mb-4">Datos Alarmantes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">El 98% de las plantas de tratamiento en EE.UU. usan cloro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">El vapor de la ducha contiene más cloro que el agua del grifo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">La absorción por la piel durante el baño es equivalente a beber 8 vasos de agua clorada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Los THMs están vinculados a abortos espontáneos y defectos de nacimiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              La Solución: <span className="text-blue-600">BodyGuard + GreenWave</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Sistema de filtración de 5 etapas que elimina el 99% de contaminantes 
              sin usar sal, electricidad o desperdiciar agua.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.shopify.com/s/files/1/0735/3221/1504/files/bodyguard-greenwave.png?v=1753119531"
                alt="Sistema BodyGuard y GreenWave"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">BodyGuard - Eliminación de Químicos</h3>
                  <p className="text-gray-600">
                    Sistema de acero inoxidable que elimina cloro, cloramina, pesticidas, 
                    herbicidas, THMs, y compuestos tóxicos como PFAS y PFOA.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">GreenWave - Sin Sal, Sin Sarro</h3>
                  <p className="text-gray-600">
                    Tecnología SP3-NAC que transforma los minerales de dureza en cristales 
                    microscópicos inofensivos. Protege tus electrodomésticos, tuberías y calentadores 
                    sin el uso de sal o electricidad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certificado NSF/WQA</h3>
                  <p className="text-gray-600">
                    Todos los componentes están certificados por la NSF y WQA, 
                    garantizando la más alta calidad y efectividad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contaminants.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-gray-900">{item.name}</span>
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Filtración de <span className="text-blue-600">5 Etapas</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Cada etapa está diseñada para eliminar contaminantes específicos, 
              garantizando agua pura en cada grifo de tu hogar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 h-full">
                  <div className="text-4xl font-bold text-blue-200 mb-4">{stage.num}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{stage.title}</h3>
                  <p className="text-sm text-gray-600">{stage.desc}</p>
                </div>
                {idx < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios para Tu Hogar y Familia
            </h2>
            <p className="text-blue-200 text-lg">
              Más que un filtro, es una inversión en la salud y bienestar de tu familia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
                <div className="w-14 h-14 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-300" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-blue-200 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 inline-block max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para proteger a tu familia?
              </h3>
              <p className="text-blue-200 mb-8">
                Solicita una cotización gratuita y descubre cómo el sistema BodyGuard + GreenWave 
                puede transformar la calidad del agua en tu hogar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setFormDialog(true)}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl"
                >
                  Solicitar Cotización Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a 
                  href="https://wa.me/7879729553"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Solicita tu Cotización Gratis
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <Input 
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <Input 
                    type="tel"
                    placeholder="(787) 000-0000"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje (opcional)</label>
                  <Textarea 
                    placeholder="¿Tienes alguna pregunta específica?"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full"
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl"
                >
                  {formSubmitted ? '¡Enviado con éxito!' : 'Enviar Solicitud'}
                </Button>
                <p className="text-center text-sm text-gray-500">
                  También puedes llamarnos al <a href="tel:7879729553" className="text-blue-600 font-medium">(787) 972-9553</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">WaterGuru</span>
              </div>
              <p className="text-gray-400 text-sm">
                Purificadores de agua para todo el hogar en Puerto Rico. 
                Sistemas certificados NSF/WQA con garantía de por vida.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:7879729553" className="hover:text-white transition">(787) 972-9553</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="https://wa.me/7879729553" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('problema')} className="hover:text-white transition">El Problema</button></li>
                <li><button onClick={() => scrollToSection('solucion')} className="hover:text-white transition">La Solución</button></li>
                <li><button onClick={() => scrollToSection('tecnologia')} className="hover:text-white transition">Tecnología</button></li>
                <li><button onClick={() => scrollToSection('beneficios')} className="hover:text-white transition">Beneficios</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 WaterGuru Puerto Rico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <a 
          href="https://wa.me/7879729553"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110">
            <MessageCircle className="w-8 h-8" />
          </div>
        </a>
      )}

      {/* Form Dialog */}
      <Dialog open={formDialog} onOpenChange={setFormDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Solicita tu Cotización Gratis
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <Input 
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <Input 
                type="tel"
                placeholder="(787) 000-0000"
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <Input 
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
              <Textarea 
                placeholder="¿Tienes alguna pregunta específica?"
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                rows={3}
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
            >
              {formSubmitted ? '¡Enviado con éxito!' : 'Enviar Solicitud'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;

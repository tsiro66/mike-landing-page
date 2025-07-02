import React, { useState } from 'react';
import { Search, TrendingUp, Award, Users, BarChart3, Zap, ChevronRight, Star, Target, Rocket } from 'lucide-react';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);



  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Hero Section with Video - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/video.mp4" type="video/mp4" />
            {/* Fallback για browsers που δεν υποστηρίζουν το video */}
            Το browser σας δεν υποστηρίζει video.
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-orange-500">
              Κυριαρχήστε στο Google
            </span>
            <br />
            <span className="text-white">Κατακτήστε την Αγορά σας</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Θα τοποθετήσω την επιχείρησή σας στην κορυφή των αναζητήσεων Google
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Ξεκινήστε Τώρα <Rocket className="w-5 h-5" />
            </button>
            <button className="border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              Δείτε Αποτελέσματα <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Πελάτες στην 1η Θέση' },
              { value: '2.5M+', label: 'Οργανικοί Επισκέπτες' },
              { value: '98%', label: 'Ποσοστό Διατήρησης' },
              { value: '12x', label: 'Μέση Απόδοση ROI' }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Professional Photo */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-3xl"></div>
              <img 
                src="/public/mike1.jpg" 
                alt="SEO Expert"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-orange-500 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">7+ Χρόνια</div>
                <div className="text-sm">Εμπειρία SEO</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">
                  Το Πλεονέκτημά σας στο SEO
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Δεν βελτιστοποιώ απλά ιστοσελίδες – τις μετατρέπω σε μηχανές παραγωγής εσόδων. Με πάνω από μία δεκαετία εμπειρίας και αποδεδειγμένο ιστορικό κατάταξης επιχειρήσεων στην κορυφή του Google, γνωρίζω ακριβώς τι χρειάζεται για να κυριαρχήσετε στην αγορά σας.
              </p>
              <div className="space-y-4">
                {[
                  'Προηγμένη έρευνα λέξεων-κλειδιών & ανάλυση ανταγωνισμού',
                  'Τεχνικοί έλεγχοι SEO & υλοποίηση',
                  'Στρατηγική περιεχομένου που μετατρέπει',
                  'Link building & ανάπτυξη κύρους'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-2 rounded-full">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-orange-500">
              Πώς σας Φέρνω στην 1η Θέση
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: 'Έλεγχος & Στρατηγική SEO',
                description: 'Ολοκληρωμένη ανάλυση της τρέχουσας θέσης σας και χάρτης πορείας προς την κορυφή'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Υλοποίηση',
                description: 'Γρήγορη, αποτελεσματική βελτιστοποίηση που αγαπά το Google και φοβούνται οι ανταγωνιστές'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Ανάπτυξη & Κυριαρχία',
                description: 'Συνεχής βελτίωση για διατήρηση και επέκταση των κορυφαίων κατατάξεών σας'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking/Authority Section with Second Photo */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-900/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">
                  Αναγνωρισμένος Ειδικός
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Πέρα από την παροχή αποτελεσμάτων στους πελάτες, μοιράζομαι την εμπειρία μου ως ομιλητής και σύμβουλος για κορυφαίες επιχειρήσεις. Οι στρατηγικές μου έχουν παρουσιαστεί σε μεγάλες εκδόσεις του κλάδου και έχουν εφαρμοστεί από εταιρείες Fortune 500.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Award />, label: 'Πιστοποιημένος Ειδικός' },
                  { icon: <Users />, label: '50+ Ομιλίες' },
                  { icon: <BarChart3 />, label: 'Αποτελέσματα με Δεδομένα' },
                  { icon: <Star />, label: '5-Αστέρων Αξιολογήσεις' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-orange-400">{item.icon}</div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-3xl"></div>
              <img 
                src="/public/mike2.jpg" 
                alt="Ομιλία σε Συνέδριο"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-orange-500">
              Έτοιμοι να Κυριαρχήσετε;
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Σταματήστε να χάνετε πελάτες από τους ανταγωνιστές σας. Ας φέρουμε την επιχείρησή σας στην 1η θέση του Google όπου ανήκει.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 animate-pulse">
            Δωρεάν Έλεγχος SEO
          </button>
          <p className="text-gray-500 mt-4">Χωρίς δεσμεύσεις • Εγγυημένα αποτελέσματα • Περιορισμένες θέσεις</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 SEO Expert. Κυριαρχούμε στις κατατάξεις Google από το 2015.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

}
export default App;
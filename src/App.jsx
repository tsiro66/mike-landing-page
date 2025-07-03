import React, { useState } from 'react';
import { Search, TrendingUp, Award, Users, BarChart3, Zap, ChevronRight, Star, Target, Rocket, Mail, Phone, MessageSquare, Send, CheckCircle, Shield, Clock } from 'lucide-react';
import VideoHeroSection from './VideoHeroSection';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setSubmitStatus('Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας μέσα σε 48 ώρες.');
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
    <VideoHeroSection />

      {/* The Question Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-orange-500">Θα ήθελα να ξεκινήσω με μια απλή ερώτηση:</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 text-center">
            <p className="font-semibold">
              Όταν έχεις ένα πρόβλημα, όταν ψάχνεις για έναν γιατρό ή ακόμα και όταν θέλεις να βγεις για έναν καφέ, πού κάνεις την αναζήτηση;
            </p>
            <p className="text-2xl">
              Στο Facebook; Στο Instagram; <span className="text-orange-500 font-bold">Ή στο Google;</span>
            </p>
            <p className="text-xl font-semibold pt-6">
              Πιστεύω πως και οι δύο γνωρίζουμε την απάντηση.
            </p>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-950 rounded-2xl border border-orange-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              Το λέω αυτό γιατί, παρότι τα social media είναι χρήσιμα, συχνά ξεχνάμε τη δυναμική της μεγαλύτερης πλατφόρμας αναζήτησης στον κόσμο: <span className="text-orange-500 font-bold">της Google</span>.
            </p>
            <p className="text-xl font-bold text-white mt-4">
              Και η αλήθεια είναι απλή: εκεί βρίσκονται οι πελάτες που ήδη αναζητούν αυτό που προσφέρει η επιχείρησή σου.
            </p>
            <p className="text-2xl text-orange-500 font-bold mt-6 text-center">
              Το ζήτημα είναι αν σε βρίσκουν.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-3xl"></div>
              <img 
                src="/mike1.jpg" 
                alt="Μιχάλης Ζαργιανάκης"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-orange-500 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">7+ Χρόνια</div>
                <div className="text-sm">Εμπειρία</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-orange-500">Άσε με να συστηθώ...</span>
              </h2>
              <p className="text-xl mb-6">
                Ονομάζομαι <span className="font-bold text-orange-500">Μιχάλης Ζαργιανάκης</span> και τα τελευταία 7 χρόνια έχω αφιερωθεί σε ένα πράγμα:
              </p>
              <p className="text-lg text-gray-300 mb-6">
                <span className="font-bold text-white">Να βοηθάω επιχειρήσεις να εμφανίζονται στις πρώτες θέσεις της Google.</span> Δεν πουλάω διαφημίσεις. Δεν είμαι ένας ακόμα τύπος που θα σου πει "βάλε budget και βλέπουμε".
              </p>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">
                  Τα πράγματα είναι πιο εύκολα όταν έχεις 4.000 και 5.000 ευρώ να ξοδέψεις σε διαφήμιση.
                </p>
                <p className="text-lg font-bold text-orange-500">
                  Το πραγματικό ερώτημα όμως είναι: τι μπορείς να κάνεις όταν δεν διαθέτεις αυτό το budget;
                </p>
                <p className="text-xl font-bold text-white mt-4">
                  Η απάντηση είναι απλή: φροντίζεις, όταν κάποιος σε αναζητά, να σε βρίσκει.
                </p>
                <p className="text-gray-300 mt-2">
                  Και στις περισσότερες περιπτώσεις αυτό είναι εφικτό.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Explanation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">Πώς Λειτουργεί η Υπηρεσία</span>
          </h2>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p>
              Κάθε επιχείρηση είναι διαφορετική και έχει τις δικές της ανάγκες. Δεν έχει σημασία αν έχεις εστιατόριο, κομμωτήριο ή δικηγορικό γραφείο. Η υπηρεσία που προσφέρω λειτουργεί για κάθε τύπο επιχείρησης.
            </p>
            
            <div className="bg-gradient-to-r from-orange-600/10 to-orange-500/10 p-8 rounded-2xl border border-orange-500/30">
              <p className="text-xl font-bold text-white mb-4">
                Αυτό όμως που την κάνει να ξεχωρίζει, είναι ότι δεν προσφέρεται μαζικά.
              </p>
              <p>
                Δεν συνεργάζομαι με "όλους όσους θέλουν". Συνεργάζομαι μόνο με όσους πραγματικά μπορώ να βοηθήσω. Και αυτό γιατί για κάθε περιοχή και για κάθε είδος επιχείρησης, επιλέγω να δουλεύω μόνο με έναν επαγγελματία.
              </p>
              <p className="text-xl text-orange-500 font-bold mt-4">
                Γιατί αλλιώς δεν έχει κανένα νόημα. Αν αναλάβω και τον ανταγωνιστή σου, ποιον θα βγάλω πρώτο στην Google;
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <Target className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Αποκλειστικότητα</h3>
              <p className="text-gray-400">Μία επιχείρηση ανά κατηγορία και περιοχή</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Εγγύηση</h3>
              <p className="text-gray-400">6 μήνες εγγύηση αποτελεσμάτων</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Απάντηση</h3>
              <p className="text-gray-400">Επικοινωνία μέσα σε 48 ώρες</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">Αποδεδειγμένα Αποτελέσματα</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Επιχειρήσεις' },
              { value: '7+', label: 'Χρόνια Εμπειρίας' },
              { value: '1η', label: 'Θέση στο Google' },
              { value: '48h', label: 'Χρόνος Απάντησης' }
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

      {/* Promise Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-12 rounded-3xl border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-orange-500">Η Υπόσχεσή μου</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Δεν σου υπόσχομαι μαγικά αποτελέσματα. Σου υπόσχομαι όμως μια <span className="font-bold text-white">ξεκάθαρη στρατηγική</span>, προσαρμοσμένη στις δικές σου ανάγκες, με στόχο την <span className="font-bold text-white">πραγματική αύξηση των πελατών σου μέσω Google</span>.
              </p>
              
              <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30">
                <p className="text-xl font-bold text-orange-500 mb-2">
                  Και για να έχεις το κεφάλι σου ήσυχο:
                </p>
                <p className="text-white font-semibold">
                  Η υπηρεσία συνοδεύεται από εγγύηση. Αν μέσα στους πρώτους έξι μήνες δεν δεις μετρήσιμα αποτελέσματα, παίρνεις τα χρήματά σου πίσω.
                </p>
              </div>
              
              <p className="text-center text-xl font-bold text-orange-500 pt-4">
                Η διαθεσιμότητα είναι περιορισμένη και ισχύει αυστηρά για μία επιχείρηση ανά κατηγορία και περιοχή.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section with Second Photo */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-orange-500">Σχετικά με τον Μιχάλη Ζαργιανάκη</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Ο κ. Μιχάλης Ζαργιανάκης έχει βοηθήσει πάνω από 100 επιχειρήσεις τα τελευταία 7 χρόνια να αυξήσουν τα έσοδά τους αξιοποιώντας στοχευμένα τη δύναμη της Google.
                </p>
                <p>
                  Με σπουδές στην Πληροφορική και εξειδίκευση στο Digital Marketing, έχει αναπτύξει μεθοδολογία που βασίζεται σε στρατηγική προβολή και μετρήσιμα αποτελέσματα.
                </p>
                <p>
                  Σήμερα συνεργάζεται επιλεκτικά με επαγγελματίες που θέλουν να αναπτύξουν την επιχείρησή τους οργανικά, χτίζοντας πραγματική παρουσία εκεί που οι πελάτες τους ψάχνουν πρώτοι: <span className="font-bold text-orange-500">στη Google</span>.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Award />, label: 'Πτυχίο Πληροφορικής' },
                  { icon: <BarChart3 />, label: 'Εξειδίκευση Digital Marketing' },
                  { icon: <Users />, label: '100+ Επιτυχημένες Συνεργασίες' },
                  { icon: <Star />, label: 'Μετρήσιμα Αποτελέσματα' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-orange-400">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-3xl"></div>
              <img 
                src="/mike2.jpg" 
                alt="Μιχάλης Ζαργιανάκης"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
              <span className="text-orange-500">
                Ελέγξτε τη Διαθεσιμότητα
              </span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Αν θέλεις να δεις αν η επιχείρησή σου πληροί τις προϋποθέσεις για συνεργασία, άφησέ μου τα στοιχεία σου.
            </p>

            <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Θα επικοινωνήσω μαζί σου μέσα σε 48 ώρες
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Θα δούμε αν η περιοχή σου είναι ακόμα διαθέσιμη και αν έχει νόημα να προχωρήσουμε.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Όνομα *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Το όνομά σας"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Τηλέφωνο *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+30 123 456 7890"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Έλεγχος Διαθεσιμότητας <Send className="w-5 h-5" />
                </button>

                {submitStatus && (
                  <div className="text-center text-green-400 mt-4 animate-fade-in flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {submitStatus}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-center text-gray-400">
                  <Shield className="w-5 h-5 inline mr-2" />
                  Εγγύηση 6 μηνών • Αποκλειστική συνεργασία ανά περιοχή • Μετρήσιμα αποτελέσματα
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Μιχάλης Ζαργιανάκης - SEO Expert. Βοηθάμε επιχειρήσεις να κυριαρχούν στο Google από το 2017.</p>
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
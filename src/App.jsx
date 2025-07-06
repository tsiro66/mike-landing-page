import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, TrendingUp, Award, Users, BarChart3, Zap, ChevronRight, Star, Target, Rocket, Mail, Phone, MessageSquare, Send, CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import VideoHeroSection from './VideoHeroSection';
import AboutMe from './AboutMe';
import GDPR from './GDPR';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [showGDPR, setShowGDPR] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const location = useLocation();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

useEffect(() => {
    emailjs.init('zjLsb9c2U7f1hVAsO'); 
},[]);


useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate form fields
  // Email regex for basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name || !formData.email || !formData.phone) {
    setSubmitStatus('Παρακαλώ συμπληρώστε όλα τα πεδία.');
    setValidationError(true);
    setTimeout(() => setValidationError(false), 3000);
    setTimeout(() => setSubmitStatus(''), 3000);
    return;
  }

  if (!emailRegex.test(formData.email)) {
    setSubmitStatus('Παρακαλώ εισάγετε ένα έγκυρο email.');
    setValidationError(true);
    setTimeout(() => setValidationError(false), 3000);
    setTimeout(() => setSubmitStatus(''), 3000);
    return;
  }

  // Phone validation: must start with 69 and be exactly 10 digits
  const phoneRegex = /^69\d{8}$/;
  if (!phoneRegex.test(formData.phone)) {
    setSubmitStatus('Το τηλέφωνο πρέπει να ξεκινά με 69 και να έχει 10 ψηφία.');
    setValidationError(true);
    setTimeout(() => setValidationError(false), 3000);
    setTimeout(() => setSubmitStatus(''), 3000);
    return;
  }
  
  try {
    // EmailJS template parameters
    const templateParams = {
      name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      to_name: 'Μιχάλης Ζαργιανάκης',
      reply_to: formData.email,
    };
    
    // Send email using EmailJS
    await emailjs.send(
      'service_jaxuwi6',     // Replace with your EmailJS service ID
      'template_0sbmcff',    // Replace with your EmailJS template ID
      templateParams,
      'zjLsb9c2U7f1hVAsO'      // Replace with your EmailJS public key
    );
    
    // Success message
    setSubmitStatus('Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας μέσα σε 48 ώρες.');
    setValidationError(false);
    // Clear form after 5 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      setSubmitStatus('');
    }, 5000);
    
  } catch (error) {
    console.error('EmailJS error:', error);
    setSubmitStatus('Υπήρξε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.');
    setValidationError(true);
    // Clear error message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('');
      setValidationError(false);
    }, 5000);
  }
  
};

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
    <VideoHeroSection />

      {/* The Question Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                <span className="text-gray-50">Θα ήθελα να ξεκινήσω με μια απλή </span>
                <span className="text-orange-500">ερώτηση:</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-gray-300 text-center">
                <p className="font-semibold">
                    Όταν έχεις ένα πρόβλημα, όταν ψάχνεις για έναν γιατρό ή ακόμα και όταν θέλεις να βγεις για έναν καφέ, πού κάνεις την αναζήτηση;
                </p>
                <p className="text-2xl">
                    Στο Facebook; Στο Instagram; <span className="text-orange-500 font-bold">Ή στο Google;</span>
                </p>
                <p className="text-2xl font-semibold">
                    Πιστεύω πως και οι δύο γνωρίζουμε την απάντηση.
                </p>
                <p className="text-lg leading-relaxed">
                    Το λέω αυτό γιατί, παρότι τα social media είναι χρήσιμα, συχνά ξεχνάμε τη δυναμική της μεγαλύτερης πλατφόρμας αναζήτησης στον κόσμο: <span className="text-orange-500 font-bold">της Google</span>.
                </p>
                <p className="text-xl font-bold text-white">
                    Και η αλήθεια είναι απλή: εκεί βρίσκονται οι πελάτες που ήδη αναζητούν αυτό που προσφέρει η επιχείρησή σου.
                </p>
                <p className="text-2xl text-orange-500 font-bold">
                    Το ζήτημα είναι αν σε βρίσκουν.
                </p>
            </div>
        </div>
    </section>

      {/* About Section with Photo */}
      <AboutMe />

      <div className="flex justify-center mb-8">
        <Link
          to="contact-form"
          smooth={true}
          duration={800}
          offset={-50}
          className="inline-flex items-center text-2xl justify-center bg-orange-500 text-white py-3 px-8 rounded-full font-semibold 
                        hover:bg-orange-600 transition duration-300 ease-in-out cursor-pointer animate-fade-in-up animation-delay-400
                        shadow-lg hover:shadow-xl transform hover:scale-105">
          <span className='pb-1'>Ξεκίνα Τώρα</span>
        </Link>
      </div>
      {/* Services Explanation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">Πώς Λειτουργεί η Υπηρεσία?</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 text-center">
            <p>
              Κάθε επιχείρηση είναι διαφορετική και έχει τις δικές της ανάγκες.
            </p>
            <p>
              Δεν έχει σημασία αν έχεις εστιατόριο, κομμωτήριο ή δικηγορικό γραφείο..
            </p>
            <p>
               Η υπηρεσία που προσφέρω λειτουργεί για κάθε τύπο επιχείρησης.
            </p>
            
            <div className="bg-gradient-to-r from-orange-600/10 to-orange-500/10 p-8 rounded-2xl border border-orange-500/30">
              <p className="text-xl font-bold text-white mb-4">
                Αυτό όμως που την κάνει να ξεχωρίζει, είναι ότι δεν προσφέρεται μαζικά.
              </p>
              <p className="text-xl font-bold text-white mb-4">
                Δεν συνεργάζομαι με "όλους όσους θέλουν".
              </p>
              
              <p>
                 Συνεργάζομαι μόνο με όσους πραγματικά μπορώ να βοηθήσω.
              </p>
              <p className='pt-4'>
                  Και αυτό γιατί για κάθε περιοχή και για κάθε είδος επιχείρησης, επιλέγω να δουλεύω μόνο με έναν επαγγελματία.
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
              { value: '1η', label: 'Σελίδα στο Google' },
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
            
            <div className="space-y-6 text-lg text-gray-300 text-center">
              <p>
                Δεν σου υπόσχομαι μαγικά αποτελέσματα.
              </p>
              <p>
                Σου υπόσχομαι όμως μια <span className="font-bold text-white">ξεκάθαρη στρατηγική</span>, προσαρμοσμένη στις δικές σου ανάγκες, με στόχο την <span className="font-bold text-white">πραγματική αύξηση των πελατών σου μέσω Google</span>.
              </p>
              
              <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30">
                <p className="text-xl font-bold text-orange-500 mb-2">
                  Και για να έχεις το κεφάλι σου ήσυχο:
                </p>
                <p className="text-white font-semibold">
                  Η υπηρεσία συνοδεύεται από εγγύηση.
                </p>
                <p className="text-white font-semibold">
                  Αν μέσα στους πρώτους έξι μήνες δεν δεις μετρήσιμα αποτελέσματα, παίρνεις τα χρήματά σου πίσω.
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
     

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
              <span className="text-orange-500">
                Θα επικοινωνήσω μαζί σου μέσα σε 48 ώρες
              </span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Θα δούμε αν η περιοχή σου είναι ακόμα διαθέσιμη και αν έχει νόημα να προχωρήσουμε.
            </p>

            <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
            
              
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
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-colors ${validationError && !formData.name ? 'border-red-500 focus:border-red-500 placeholder-red-400' : 'border-gray-700 focus:border-orange-500'}`}
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
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-colors ${validationError && !formData.email ? 'border-red-500 focus:border-red-500 placeholder-red-400' : 'border-gray-700 focus:border-orange-500'}`}
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
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-colors ${validationError && !formData.phone ? 'border-red-500 focus:border-red-500 placeholder-red-400' : 'border-gray-700 focus:border-orange-500'}`}
                    placeholder="123 456 7890"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Έλεγχος Διαθεσιμότητας <Send className="w-5 h-5" />
                </button>

                {submitStatus && (
                  <div className={`text-center mt-4 animate-fade-in flex items-center justify-center gap-2 ${validationError ? 'text-red-400' : 'text-green-400'}`}>
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
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
    
    {/* Left Section */}
    <div className="text-center md:text-left space-y-2">
      <p>&copy; 2025 Μιχάλης Ζαργιανάκης - SEO Expert</p>
      <p>Βοηθάμε επιχειρήσεις να κυριαρχούν στο Google από το 2017.</p>
      
    </div>

    {/* Right Section */}
    <div className="text-center flex flex-col md:text-right space-y-2">
      
      <p>Κατασκευή Ιστοσελίδας από</p>
      <a
        href="https://tsironisportfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition duration-200 underline underline-offset-4"
      >
        Thodoris Tsironis
      </a>
      <button
        onClick={() => setShowGDPR(true)}
        className="text-orange-500 hover:text-orange-400 transition duration-200 underline underline-offset-4"
      >
        Πολιτική Απορρήτου & GDPR
      </button>
    </div>
  </div>
</footer>


      {/* GDPR Modal */}
      <GDPR isOpen={showGDPR} onClose={() => setShowGDPR(false)} />

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
import React from "react";
import {
  Shield,
  Lock,
  Globe,
  Database,
  FileText,
  Users,
  Clock,
  X,
} from "lucide-react";

function GDPR({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-800 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-4 mt-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="text-orange-500">Πολιτική Απορρήτου & GDPR</span>
            </h1>

            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold">Προσωπικά Δεδομένα GDPR</h2>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                Το απόρρητο των επισκεπτών της Μιχάλης Ζαργιανάκης είναι πολύ
                σημαντικό για εμάς και είμαστε αφοσιωμένοι στην προστασία του. Η
                πολιτική μας εξηγεί πως θα χρησιμοποιήσουμε τις προσωπικές σας
                πληροφορίες. Η συναίνεσή σας στη χρήση των cookies σε συμφωνία
                με τους όρους της πολιτικής μας κατά την πρώτη σας επίσκεψη στον
                ιστότοπο της Μιχάλης Ζαργιανάκης, μας επιτρέπει τη χρήση cookies
                κάθε φορά που επισκέπτεστε τον ιστότοπό μας.
              </p>
            </div>

            <div className="space-y-6">
              {/* Συλλογή προσωπικών πληροφοριών */}
              <section className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold">
                    Συλλογή προσωπικών πληροφοριών
                  </h3>
                </div>

                <p className="text-gray-300 mb-3 text-sm">
                  Οι παρακάτω τύποι προσωπικών πληροφοριών μπορούν να
                  συλλεχθούν, να αποθηκευτούν και να χρησιμοποιηθούν:
                </p>

                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Πληροφορίες σχετικές με τον υπολογιστή σας, όπως η
                      διεύθυνση IP, η γεωγραφική τοποθεσία, ο τύπος και η έκδοση
                      του περιηγητή σας και το λειτουργικό σας σύστημα.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Πληροφορίες σχετικά με τις επισκέψεις σας και τη χρήση της
                      Μιχάλης Ζαργιανάκης.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Πληροφορίες όπως η διεύθυνση email σας, την οποία εισάγετε
                      κατά την εγγραφή στον ιστότοπο.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Πληροφορίες που εισάγετε κατά τη δημιουργία του προφίλ
                      σας.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Πληροφορίες σχετικά με τις αγορές σας και τις συναλλαγές
                      που κάνετε.
                    </span>
                  </li>
                </ul>

                <div className="mt-3 p-3 bg-orange-500/10 rounded border border-orange-500/30">
                  <p className="text-sm">
                    <strong className="text-orange-500">Σημαντικό:</strong> Δεν
                    θα διοχετεύσουμε τις προσωπικές σας πληροφορίες χωρίς τη
                    συναίνεσή σας σε κανένα τρίτο μέρος.
                  </p>
                </div>
              </section>

              {/* Κοινοποίηση προσωπικών πληροφοριών */}
              <section className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold">
                    Κοινοποίηση προσωπικών πληροφοριών
                  </h3>
                </div>

                <p className="text-gray-300 mb-3 text-sm">
                  Μπορούμε να κοινοποιήσουμε τις προσωπικές σας πληροφορίες σε:
                </p>

                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Υπαλλήλους, στελέχη, ασφαλιστές, επαγγελματικούς
                      συμβούλους, εκπροσώπους, προμηθευτές ή υπεργολάβους μας.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Εφόσον απαιτείται από το νόμο ή για νομικές διαδικασίες.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Διεθνείς μεταφορές δεδομένων */}
              <section className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold">
                    Διεθνείς μεταφορές δεδομένων
                  </h3>
                </div>

                <div className="space-y-2 text-gray-300 text-sm">
                  <p>
                    Οι πληροφορίες μπορεί να αποθηκευτούν, να επεξεργαστούν και
                    να μεταφερθούν σε χώρες όπου δραστηριοποιούμαστε.
                  </p>
                  <p className="font-semibold text-orange-400">
                    Συμφωνείτε ρητά σε αυτή τη μεταφορά.
                  </p>
                </div>
              </section>

              {/* Ασφάλεια των προσωπικών σας δεδομένων */}
              <section className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold">
                    Ασφάλεια των προσωπικών σας δεδομένων
                  </h3>
                </div>

                <div className="space-y-2 text-gray-300 text-sm">
                  <p>
                    Θα λάβουμε τεχνικά και οργανωτικά μέτρα για να αποτρέψουμε
                    την απώλεια, κακή χρήση ή αλλοίωση των δεδομένων σας.
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        Ασφαλείς διακομιστές με κωδικούς πρόσβασης και firewalls
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Κρυπτογράφηση ηλεκτρονικών συναλλαγών</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Τα δικαιώματά σας */}
              <section className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold">Τα δικαιώματά σας</h3>
                </div>

                <p className="text-gray-300 text-sm">
                  Μπορείτε οποιαδήποτε στιγμή να μας ζητήσετε να μην
                  επεξεργαζόμαστε τα προσωπικά σας δεδομένα για διαφημιστικούς
                  σκοπούς.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GDPR;

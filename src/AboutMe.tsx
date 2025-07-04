const AboutMe = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-10 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-500">Άσε με να συστηθώ...</span>
            </h2>
            <p className="text-xl mb-6">
              Ονομάζομαι{" "}
              <span className="font-bold text-orange-500">
                Μιχάλης Ζαργιανάκης
              </span>{" "}
              και τα τελευταία 7 χρόνια έχω αφιερωθεί σε ένα πράγμα:
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <span className="font-bold text-white">
                Να βοηθάω επιχειρήσεις να εμφανίζονται στις πρώτες θέσεις της
                Google.
              </span>
            </p>
            <p className="text-lg mb-6">
              <span className="font-bold text-white">
                Δεν πουλάω διαφημίσεις.
              </span>
            </p>
            <p className="text-lg mb-6">
              <span className="font-bold text-white">
                Δεν είμαι ένας ακόμα τύπος που θα σου πει "βάλε budget και
                βλέπουμε".
              </span>
            </p>

            <p className="text-xl mb-4">
              Τα πράγματα είναι πιο εύκολα όταν έχεις 4.000 και 5.000 ευρώ να
              ξοδέψεις σε διαφήμιση.
            </p>
            <p className="text-xl font-bold text-orange-500 mb-4">
              Το πραγματικό ερώτημα όμως είναι:
            </p>
            <p className="text-xl text-orange-500 mb-4">
              τι μπορείς να κάνεις όταν δεν διαθέτεις αυτό το budget;
            </p>
            <p className="text-xl text-white mb-2">
              Η απάντηση είναι απλή: φροντίζεις, όταν κάποιος σε αναζητά, να σε
              βρίσκει.
            </p>
            <p className="text-xl">
              Και στις περισσότερες περιπτώσεις αυτό γίνεται.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 blur-3xl"></div>
            <img
              src="/mike1.jpg"
              alt="Μιχάλης Ζαργιανάκης"
              className="relative transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-orange-500 p-4 md:p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">7+ Χρόνια Εμπειρία</div>
              <div className="text-sm">100+ Επιχειρήσεις</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

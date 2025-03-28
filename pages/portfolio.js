
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function PortfolioLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors">
      <div className="flex justify-end max-w-6xl mx-auto">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">👩‍💻 Sviluppo UI pulite e moderne</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Crea la tua interfaccia perfetta con template React + TailwindCSS ottimizzati per SaaS, dashboard e landing page.
          </p>
          <a href="#projects">
            <Button>Guarda i miei lavori</Button>
          </a>
        </div>
        <div className="max-w-md">
          <img
            src="/code.svg"
            alt="Mockup portfolio"
            className="w-full"
          />
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-4">
{/*               <img src="/preview-saas-dashboard.png" alt="SaaS Admin Dashboard" className="rounded-xl mb-4" /> */}
              <h2 className="text-xl font-bold mb-2">📦 SaaS Admin Dashboard</h2>
              <div className="flex gap-2 text-xs mb-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Tailwind</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Dashboard UI + Landing Page con dark mode. Codice modulare e pronto all’uso.
              </p>
              <div className="flex gap-2">
                <a href="https://your-demo.vercel.app" target="_blank">
                  <Button>Live Demo</Button>
                </a>
                <a href="https://beaborsa.gumroad.com/l/saas-dashboard" target="_blank">
                  <Button className="text-white px-5 py-2.5 rounded-xl shadow-md shadow-md hover:shadow-lg transition duration-300 bg-gray-500 hover:bg-gray-600 dark:bg-dark-400 dark:hover:bg-dark-500 focus:ring-gray-300">Acquista</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-4">
{/*               <img src="/preview-coming-soon.png" alt="Coming Soon" className="rounded-xl mb-4" /> */}
              <h2 className="text-xl font-bold mb-2">✨ Coming Soon</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Nuovi template frontend in arrivo. UI moderne e riutilizzabili.
              </p>
              <Button disabled className="w-full opacity-60 cursor-not-allowed">Presto online</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardContent className="p-4">
{/*               <img src="/preview-custom.png" alt="Custom Projects" className="rounded-xl mb-4" /> */}
              <h2 className="text-xl font-bold mb-2">🚀 Template su misura</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Hai bisogno di qualcosa di specifico? Scrivimi e realizziamolo insieme.
              </p>
              <a href="mailto:yourmail@example.com">
                <Button className="w-full">Contattami</Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">👩‍💻 Chi sono</h2>
          <p className="text-lg leading-relaxed">
            Sono una sviluppatrice front-end con passione per UI moderne, semplici e performanti.
            Lavoro con <strong>React</strong>, <strong>Next.js</strong> e <strong>Tailwind CSS</strong> per creare esperienze utente coinvolgenti e responsive.
          </p>
          <p className="mt-4 text-md text-gray-500 dark:text-gray-400">
            Amo trasformare idee in interfacce pulite, accessibili e pronte per la produzione.
          </p>
        </div>
        <section id="contact" className="py-24 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📬 Contattami</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hai un progetto? Vuoi collaborare o semplicemente fare due chiacchiere?
            </p>
            <a
              href="mailto:beasofiaborsa@gmail.com"
               className="px-5 py-2.5 bg-pink-500 text-white rounded-xl hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-500 shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Scrivimi
            </a>
          </div>
        </section>
      </section>

    </div>
  );
}
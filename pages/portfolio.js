
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function PortfolioLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
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
            src="https://illustrations.popsy.co/white/web-design.svg"
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
              <img src="/preview-saas-dashboard.png" alt="SaaS Admin Dashboard" className="rounded-xl mb-4" />
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
                  <Button className="bg-gray-800 hover:bg-gray-900">Acquista</Button>
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
              <img src="/preview-coming-soon.png" alt="Coming Soon" className="rounded-xl mb-4" />
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
              <img src="/preview-custom.png" alt="Custom Projects" className="rounded-xl mb-4" />
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
      <section id="about" className="max-w-4xl mx-auto text-center mt-24 px-6">
        <h2 className="text-3xl font-bold mb-4">👩‍💻 Chi sono</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Sono una sviluppatrice frontend appassionata di UI pulite, moderne e modulari.
          Creo template per SaaS, dashboard e landing page usando React, Next.js e TailwindCSS.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Mi piace costruire prodotti semplici, funzionali e belli. Se hai bisogno di un template su misura, scrivimi!
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/tuo-username" target="_blank">
            <Button>GitHub</Button>
          </a>
          <a href="mailto:yourmail@example.com">
            <Button className="bg-gray-800 hover:bg-gray-900">Contattami</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
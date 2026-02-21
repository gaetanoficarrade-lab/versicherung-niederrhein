import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Erstinformation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.id = "vema_erstinformation_container";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "vema_script_erstinformation";
    script.textContent = `
      var _vema = {};
      _vema['m'] = 'maklerkalkar';
      _vema['content'] = 'erstinformation';
      _vema['target'] = 'vema_erstinformation_container';
      (function() {
        var scripts = document.getElementsByTagName("script");
        var thisScript = scripts[scripts.length - 1];
        var currentScript = document.currentScript || thisScript;
        var params="script="+currentScript.id;
        for(var n in _vema) {
          params+=String.fromCharCode(38)+n+"="+encodeURIComponent(_vema[n]);
        }
        var u="https://landingpage.vema-eg.de/ext/getContent.js?"+params;
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript';
        g.defer=true;
        g.src=u;
        s.parentNode.insertBefore(g,s);
      })();
    `;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Erst-/Statusinformation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* VEMA Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div ref={containerRef} className="max-w-3xl mx-auto prose prose-lg" />
        </div>
      </section>
    </Layout>
  );
}

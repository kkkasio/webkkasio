import { TESTIMONIALS } from "@/constants";
import { Star } from "lucide-react";

export const Testmonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">
            Depoimentos
          </h2>
          <h3 className="text-4xl font-bold">Resultados que Falam por Si</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full border border-indigo-500/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "L'ambiance était incroyable, j'ai dansé jusqu'au matin.",
      author: "Awa",
      role: "Participante"
    },
    {
      quote: "Des artistes et DJs super, c'est un vrai voyage musical.",
      author: "Yannick",
      role: "DJ Invité"
    },
    {
      quote: "Organisation impeccable et salles magnifiques. À refaire !",
      author: "Fatou",
      role: "Clubbeuse"
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <h1>Ils ont adoré</h1>
      </section>

      <section className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <div className="author-info">
              <p className="author-name">{testimonial.author}</p>
              <p className="author-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
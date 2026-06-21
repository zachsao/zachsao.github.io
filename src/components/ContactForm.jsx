import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's build something</h2>
        </div>

        <div className="contact__grid reveal">
          <div className="contact__intro">
            <p>
              Have a project in mind or want to chat about mobile development?
              Drop me a message — I typically respond within a day or two.
            </p>
            <a
              href="https://www.linkedin.com/in/zacharia-sao-4aa20850/"
              className="contact__email"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Let's make an app together"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Project details or inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Message sent ✓"
                  : status === "error"
                    ? "Failed — try again"
                    : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

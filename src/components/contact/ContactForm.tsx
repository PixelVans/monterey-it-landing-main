const ContactForm = () => {
  return (
    <form
        name="contact"
        method="POST"
        action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4 mt-20"
      >

      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot */}
      <input type="hidden" name="bot-field" />

      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium">How can we help?</label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          placeholder="Briefly describe the issue or request"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3 text-primary-foreground font-semibold hover:opacity-90 transition"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;

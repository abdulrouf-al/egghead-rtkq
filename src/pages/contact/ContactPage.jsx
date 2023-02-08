import * as api from "../../api";

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    api.makeContact(formData);
  };
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>
        Please send us a detailed message if you'd like to get in touch to ask
        questions about any of our dog grooming services, or anything at all.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="youremail@youremail.com"
          />
        </label>
        <label>
          Subject:{" "}
          <input
            type="text"
            name="subject"
            placeholder="Short subject line..."
          />
        </label>
        <textarea
          name="contents"
          rows={5}
          placeholder="Please let us know what you want answered and we will try to help"
        ></textarea>
      </form>
    </div>
  );
}

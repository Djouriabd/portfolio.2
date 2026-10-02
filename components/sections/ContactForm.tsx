"use client";

import { useState, type FormEvent } from "react";
import { SendIcon } from "@/components/ui/icons";
import styles from "./ContactForm.module.css";

/**
 * No backend needed: submitting opens the visitor's email app with
 * the message already written. Swap `onSubmit` for an API call
 * (Formspree, Resend, a route handler...) if you want messages sent directly.
 */
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();

    const subject = `New project from ${name}`;
    const body = `${project}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        <span>Your name</span>
        <input name="name" type="text" placeholder="Name" autoComplete="name" required />
      </label>

      <label className={styles.field}>
        <span>Your email</span>
        <input name="email" type="email" placeholder="Email" autoComplete="email" required />
      </label>

      <label className={styles.field}>
        <span>Your project</span>
        <textarea name="project" placeholder="Description" rows={5} required />
      </label>

      <div className={styles.footer}>
        <button type="submit" className={styles.submit}>
          <span className={styles.submitIcon}>
            <SendIcon size={18} />
          </span>
          Submit
        </button>
        <p className={styles.status} role="status">
          {sent ? "Your email app should open with the message ready ✦" : ""}
        </p>
      </div>
    </form>
  );
}

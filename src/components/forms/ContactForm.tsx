"use client";

import { useState, type FormEvent } from "react";
import { FormField } from "@/components/forms/FormField";
import { FormSelect } from "@/components/forms/FormSelect";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { isRequired, isValidEmail, isValidPhone } from "@/lib/validation";

const enquiryOptions = [
  "Individual Legal Matter",
  "Business or Commercial Matter",
  "Organisational Matter",
  "General Enquiry",
];

type FieldName = "fullName" | "email" | "phone" | "enquiryType" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!isRequired(values.fullName)) nextErrors.fullName = "Please enter your full name.";
    if (!isRequired(values.email)) nextErrors.email = "Please enter your email address.";
    else if (!isValidEmail(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!isValidPhone(values.phone)) nextErrors.phone = "Please enter a valid phone number.";
    if (!isRequired(values.enquiryType)) nextErrors.enquiryType = "Please select the nature of your enquiry.";
    if (!isRequired(values.message)) nextErrors.message = "Please tell us briefly about your enquiry.";

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // TODO: Replace this simulated submission with a real integration once a backend exists —
    // e.g. POST to a Next.js Route Handler at src/app/api/contact/route.ts that forwards the
    // enquiry to an email service (Resend/SendGrid) or CRM. No backend is wired up yet.
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 800);
  }

  if (status === "success") {
    return (
      <div className="border-l border-antique-gold py-2 pl-6">
        <p className="font-serif text-2xl text-charcoal">Thank you for reaching out.</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          Your enquiry has been received. A member of the ELLIS team will review it and respond
          in due course.
        </p>
        <div className="mt-8 max-w-md">
          <Disclaimer>
            Submitting an enquiry does not by itself establish a lawyer-client relationship.
          </Disclaimer>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <FormField
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={errors.fullName}
          required
          onChange={handleChange}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          required
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
        />
        <FormSelect
          label="Nature of Enquiry"
          name="enquiryType"
          value={values.enquiryType}
          options={enquiryOptions}
          error={errors.enquiryType}
          required
          onChange={handleChange}
        />
      </div>

      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={values.message}
        error={errors.message}
        required
        onChange={handleChange}
      />

      <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center border border-burgundy bg-burgundy px-10 py-3.5 text-xs font-semibold uppercase tracking-wide-cap text-white transition-colors hover:bg-burgundy-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        </button>
      </div>

      <Disclaimer>
        Submitting an enquiry does not by itself establish a lawyer-client relationship.
      </Disclaimer>
    </form>
  );
}

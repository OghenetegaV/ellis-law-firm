type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
  onChange: (name: string, value: string) => void;
};

export function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  required,
  as = "input",
  rows = 5,
  onChange,
}: FormFieldProps) {
  const baseClasses =
    "w-full rounded-2xl border border-charcoal/12 bg-ivory/60 px-5 py-3.5 text-charcoal placeholder:text-charcoal/35 focus:border-burgundy focus:bg-white focus:outline-none transition-colors";

  return (
    <div>
      <label htmlFor={name} className="eyebrow text-charcoal/60">
        {label}
        {required && <span className="text-burgundy"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${baseClasses} mt-2.5 resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${baseClasses} mt-2.5`}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-burgundy">
          {error}
        </p>
      )}
    </div>
  );
}

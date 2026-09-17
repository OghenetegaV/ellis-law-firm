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
    "w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-charcoal placeholder:text-charcoal/35 focus:border-burgundy focus:outline-none transition-colors";

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
          className={`${baseClasses} mt-2 resize-none`}
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
          className={`${baseClasses} mt-2`}
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

type FormSelectProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  error?: string;
  required?: boolean;
  onChange: (name: string, value: string) => void;
};

export function FormSelect({ label, name, value, options, error, required, onChange }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-charcoal/60">
        {label}
        {required && <span className="text-burgundy"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-charcoal focus:border-burgundy focus:outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-burgundy">
          {error}
        </p>
      )}
    </div>
  );
}

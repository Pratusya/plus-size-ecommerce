import { cn } from '../../utils/helpers';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-charcoal mb-2"
        >
          {label}
          {required && <span className="text-warm-coral ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={cn(
          'w-full h-12 px-4 border border-soft-gray rounded-lg',
          'text-charcoal placeholder:text-medium-gray',
          'focus:outline-none focus:border-deep-teal focus:ring-1 focus:ring-deep-teal',
          'transition-all duration-200',
          error && 'border-warm-coral focus:border-warm-coral focus:ring-warm-coral',
          disabled && 'bg-light-gray opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-warm-coral">{error}</p>
      )}
    </div>
  );
};

export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  id,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-charcoal mb-2"
        >
          {label}
          {required && <span className="text-warm-coral ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 border border-soft-gray rounded-lg',
          'text-charcoal placeholder:text-medium-gray',
          'focus:outline-none focus:border-deep-teal focus:ring-1 focus:ring-deep-teal',
          'transition-all duration-200 resize-none',
          error && 'border-warm-coral focus:border-warm-coral focus:ring-warm-coral',
          disabled && 'bg-light-gray opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-warm-coral">{error}</p>
      )}
    </div>
  );
};

export default Input;

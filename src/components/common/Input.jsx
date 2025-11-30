import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  success,
  disabled = false,
  required = false,
  className = '',
  icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className={`relative ${className}`}>
      {label && (
        <motion.label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
            isFocused || hasValue
              ? '-top-2.5 text-xs bg-white px-1 text-royal-purple font-semibold'
              : 'top-3.5 text-slate text-base'
          }`}
          initial={false}
          animate={{
            top: isFocused || hasValue ? -10 : 14,
            fontSize: isFocused || hasValue ? '12px' : '16px'
          }}
        >
          {label} {required && <span className="text-sunset-orange">*</span>}
        </motion.label>
      )}
      
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">
            {icon}
          </span>
        )}
        
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={isFocused ? placeholder : ''}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 outline-none ${
            icon ? 'pl-12' : ''
          } ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : success
              ? 'border-emerald-success focus:border-emerald-success focus:ring-2 focus:ring-green-100'
              : 'border-silver-mist focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20'
          } ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }`}
          {...props}
        />
      </div>
      
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.p>
        )}
        {success && !error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-sm text-emerald-success flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {success}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;

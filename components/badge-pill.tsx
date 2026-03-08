interface BadgePillProps {
  children: React.ReactNode
  variant?: 'primary' | 'teal' | 'accent' | 'success' | 'neutral'
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700',
  teal: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-700',
  success: 'bg-primary-100 text-primary-700',
  neutral: 'bg-gray-100 text-gray-700',
}

export default function BadgePill({
  children,
  variant = 'primary',
}: BadgePillProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}

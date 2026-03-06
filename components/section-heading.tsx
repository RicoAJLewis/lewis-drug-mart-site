interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && (
        <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
          {tag}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 ${center ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

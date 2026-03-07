import { Star } from '@/components/icons'

interface ReviewCardProps {
  name: string
  role: string
  text: string
  rating: number
}

export default function ReviewCard({ name, role, text, rating }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{text}&quot;</p>

      {/* Reviewer Info */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  )
}

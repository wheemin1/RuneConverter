// Simple skeleton loading component for better UX during lazy loading

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'section';
}

export function Skeleton({ className = '', variant = 'text' }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-amber-100/50 via-stone-200/50 to-amber-100/50 rounded";
  
  const variantClasses = {
    text: "h-4 w-3/4",
    card: "h-48 w-full",
    section: "h-64 w-full",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}

// Skeleton for RuneReference section
export function RuneReferenceSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton variant="text" className="w-1/2 h-8" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} variant="card" className="h-32" />
        ))}
      </div>
    </div>
  );
}

// Skeleton for HistoricalInfo section
export function HistoricalInfoSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton variant="text" className="w-1/3 h-8" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-4/5" />
    </div>
  );
}

// Skeleton for FAQ section
export function FAQSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton variant="text" className="w-1/4 h-8" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton variant="text" className="w-3/4" />
          <Skeleton variant="text" className="w-full" />
        </div>
      ))}
    </div>
  );
}

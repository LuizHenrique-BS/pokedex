import { Skeleton } from "./Skeleton";

export const PokemonCardSkeleton = () => {
  return (
    <div className="w-full max-w-4xl bg-(--bg) border border-(--border) rounded-3xl p-6 md:p-10 shadow-(--shadow) flex flex-col md:flex-row gap-10 items-stretch opacity-60">
      {/* Left: Image & Title Skeleton */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] border-b md:border-b-0 md:border-r border-(--border) pb-8 md:pb-0 md:pr-10">
        <Skeleton className="w-56 h-56 rounded-full" />
        <Skeleton className="w-48 h-10 mt-6" />
        <Skeleton className="w-20 h-4 mt-2" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="w-16 h-6 rounded-full" />
          <Skeleton className="w-16 h-6 rounded-full" />
        </div>
      </div>

      {/* Right: Details & Stats Skeleton */}
      <div className="flex-1.5 flex flex-col gap-6">
        <div>
          <Skeleton className="w-24 h-4 mb-3" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-2/3 h-4" />
        </div>

        <div className="grid grid-cols-2 gap-6 py-4 border-y border-(--border)">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-20 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-20 h-6" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Skeleton className="w-24 h-4 mb-2" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex justify-between">
                <Skeleton className="w-12 h-3" />
                <Skeleton className="w-8 h-3" />
              </div>
              <Skeleton className="w-full h-2 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

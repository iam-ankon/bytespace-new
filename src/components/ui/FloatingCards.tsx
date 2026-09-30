import { studentAvatars } from "@/data/site";
import { cn } from "@/lib/cn";
import { StarIcon } from "../icons";
import { AvatarStack } from "./AvatarStack";

/** Small white "glass" cards that float over the hero and feature images. */

const cardBase = "rounded-xl p-3 shadow-card";

export function HappyStudentsCard({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "lime";
}) {
  return (
    <div className={cn(cardBase, variant === "lime" ? "bg-lime" : "bg-white", className)}>
      <p className="text-xs font-medium text-ink">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[10px] text-body">
        4.5 <span className="text-muted">(240)</span>
        <StarIcon className="h-2.5 w-2.5 text-lime-dark" />
      </p>
      <AvatarStack avatars={studentAvatars.slice(0, 6)} more="2K+" size="md" className="mt-2" />
    </div>
  );
}

export function ProgressCard({ value = 55, className }: { value?: number; className?: string }) {
  return (
    <div className={cn(cardBase, "w-40 bg-white", className)}>
      <p className="text-[10px] font-medium text-body">Learning Progress</p>
      <p className="font-display mt-1 text-3xl font-semibold text-ink">{value}%</p>
      <div className="mt-2 h-1.5 rounded-full bg-surface">
        <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function CourseStatCard({ className }: { className?: string }) {
  return (
    <div className={cn(cardBase, "bg-white", className)}>
      <p className="text-xs font-medium text-ink">UI/UX Design</p>
      <p className="mt-0.5 text-[10px] text-muted">200 Courses &bull; 1000+ Students</p>
    </div>
  );
}

export function RevenueCard({
  label,
  period,
  amount,
  badge,
  className,
}: {
  label: string;
  period: string;
  amount: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl bg-brand p-3 text-white shadow-card", className)}>
      <p className="text-[11px] font-medium">{label}</p>
      <p className="text-[9px] text-white/60">{period}</p>
      <p className="font-display mt-1 text-lg font-semibold">{amount}</p>
      {badge ? (
        <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[9px] font-semibold text-ink">
          {badge}
        </span>
      ) : (
        <div className="mt-2 h-1 w-full rounded-full bg-white/20">
          <div className="h-full w-4/5 rounded-full bg-lime" />
        </div>
      )}
    </div>
  );
}

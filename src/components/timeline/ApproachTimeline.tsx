import { approachSteps } from "@/lib/content";
import { TimelineStep } from "@/components/timeline/TimelineStep";
import { Reveal } from "@/components/ui/Reveal";

export function ApproachTimeline() {
  return (
    <div className="mx-auto max-w-2xl">
      {approachSteps.map((item, index) => (
        <Reveal key={item.step} delay={index * 80}>
          <TimelineStep {...item} isLast={index === approachSteps.length - 1} />
        </Reveal>
      ))}
    </div>
  );
}

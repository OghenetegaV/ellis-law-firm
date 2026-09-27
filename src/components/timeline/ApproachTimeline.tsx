import { approachSteps } from "@/lib/content";
import { TimelineStep } from "@/components/timeline/TimelineStep";
import { Reveal } from "@/components/ui/Reveal";

export function ApproachTimeline() {
  return (
    <div className="flex flex-col gap-5">
      {approachSteps.map((item, index) => (
        <Reveal
          key={item.step}
          delay={index * 80}
          className={index % 2 === 1 ? "md:ml-16" : "md:mr-16"}
        >
          <TimelineStep {...item} />
        </Reveal>
      ))}
    </div>
  );
}

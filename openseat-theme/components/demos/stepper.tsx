"use client";

import { Step, Stepper } from "@astryxdesign/core/Stepper";
import { Examples, Preview } from "./shared";

export default function StepperDemo() {
  return (
    <Examples>
      <Preview label="Linear">
        <Stepper activeStep={1} label="Onboarding">
          <Step step={0} label="Invite" />
          <Step step={1} label="Review" />
          <Step step={2} label="Award" />
        </Stepper>
      </Preview>
    </Examples>
  );
}

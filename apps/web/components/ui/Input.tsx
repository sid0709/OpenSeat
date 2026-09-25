"use client";

import { forwardRef } from "react";

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseFieldProps {
  label?: string;
  helper?: string;
  error?: boolean;
}

/** Public InputFieldProps contract for the Input component. */
export interface InputFieldProps
  extends BaseFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  multiline?: false;
}

/** Public TextareaFieldProps contract for the Input component. */
export interface TextareaFieldProps
  extends BaseFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  multiline: true;
}

/** Public FieldProps contract for the Input component. */
export type FieldProps = InputFieldProps | TextareaFieldProps;

/** The default text field — label above, never floating inside the box. */
export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  ({ label, helper, error, multiline, ...rest }, ref) => {
    const fieldClass = "os-field" + (error ? " os-field-error" : "");
    return (
      <div className="os-field-group">
        {label && <label className="label">{label}</label>}
        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={fieldClass}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={fieldClass}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {helper && (
          <span className={"body-sm " + (error ? "os-field-helper-error" : "os-field-helper")}>
            {helper}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
